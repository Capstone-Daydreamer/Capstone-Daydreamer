const passport = require('passport');
const router = require('express').Router();
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;

const { User } = require('../db/models');
const Cronofy = require('cronofy');
module.exports = router

var cronofyClient = new Cronofy({
  clientId: process.env.CRONOFY_CLIENT_ID,
  clientSecret: process.env.CRONOFY_CLIENT_SECRET
});

passport.use('cronofy', new OAuth2Strategy({
  responseType: 'code',
  clientID: process.env.CRONOFY_CLIENT_ID,
  callbackURL: process.env.CRONOFY_CALLBACK,
  authorizationURL: 'https://app.cronofy.com/oauth/authorize',
  scope: ['create_calendar', 'read_events', 'create_event', 'delete_event', 'read_free_busy', 'change_participation_status'],
  state: {},
  tokenURL: 'https://api.cronofy.com/oauth/token',
  clientSecret: process.env.CRONOFY_CLIENT_SECRET,
}, async (token, refreshToken, profile, done) => {
  console.log('ACCESS', token)
  console.log('REFRESH', refreshToken)
  console.log('PROFILE', profile)
  console.log('DONE', done)
  const user = await User.findById(2);
  await user.update({
    cronofyAccId: token,
    cronofyRefreshToken: refreshToken,
  });
  // cronofyClient.requestAccessToken({ code: token })
  // console.log(stuff)
  done(null, user)
}));


// Redirect the user to the OAuth 2.0 provider for authentication.  When
// complete, the provider will redirect the user back to the application at
//     /auth/provider/callback
router.get('/', passport.authorize('cronofy'));

// The OAuth 2.0 provider has redirected the user back to the application.
// Finish the authentication process by attempting to obtain an access
// token.  If authorization was granted, the user will be logged in.
// Otherwise, authentication has failed.
router.get('/callback',
    passport.authorize('cronofy', {
      successRedirect: '/success',
      failureRedirect: '/failure'
    })
);
