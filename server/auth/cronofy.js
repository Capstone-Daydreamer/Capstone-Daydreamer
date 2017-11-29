const passport = require('passport');
const router = require('express').Router();
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;

const { User } = require('../db/models');
const Cronofy = require('cronofy');
module.exports = router



var cronofyClient = new Cronofy({
  client_id: process.env.CRONOFY_CLIENT_ID,
  client_secret: process.env.CRONOFY_CLIENT_ID,
})

let userId = 0

passport.use('cronofy', new OAuth2Strategy({
  responseType: 'code',
  clientID: process.env.CRONOFY_CLIENT_ID,
  callbackURL: process.env.CRONOFY_CALLBACK,
  authorizationURL: 'https://app.cronofy.com/oauth/authorize',
  scope: ['create_calendar', 'read_events', 'create_event', 'delete_event', 'read_free_busy', 'change_participation_status'],
  state: {/* Can put anything you need here... client ID? */ },
  tokenURL: 'https://api.cronofy.com/oauth/token',
  clientSecret: process.env.CRONOFY_CLIENT_SECRET,
}, async (token, refreshToken, profile, done) => {

  var newCronofyClient = new Cronofy({
    clientId: process.env.CRONOFY_CLIENT_ID,
    clientSecret: process.env.CRONOFY_CLIENT_SECRET,
    access_token: token,
    refresh_token: refreshToken
  });

  const options = {
    tzid: 'Etc/UTC',
  };
  console.log(userId)
  const user = await User.findById(userId);

  const accountRes = await newCronofyClient.accountInformation(options)

  const accountInfo = accountRes.account

  const calendarRes = await newCronofyClient.listCalendars(options)

  var calendars = calendarRes.calendars;

  let calendarArr = [];
  calendars.forEach( calendar => calendarArr.push(calendar.calendar_id))

  await user.update({
    cronofyAccessToken: token,
    cronofyRefreshToken: refreshToken,
    cronofyAccId: accountInfo.account_id,
    calendarTokens: calendarArr,
  });
  // cronofyClient.requestAccessToken({ code: token })
  done(null, user)
}));

// Redirect the user to the OAuth 2.0 provider for authentication.  When
// complete, the provider will redirect the user back to the application at
//     /auth/provider/callback
router.get('/:userId', (req, res, next) => {
  if (userId === 0) userId = req.params.userId;
  next();
}, passport.authorize('cronofy'));

// The OAuth 2.0 provider has redirected the user back to the application.
// Finish the authentication process by attempting to obtain an access
// token.  If authorization was granted, the user will be logged in.
// Otherwise, authentication has failed.
router.get('/callback', passport.authorize('cronofy', {
    successRedirect: `http://127.0.0.1:8080/profile`,
    failureRedirect: `http://127.0.0.1:8080/profile`
  })
);
