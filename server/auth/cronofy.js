const passport = require('passport');
const router = require('express').Router();
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
const {User} = require('../db/models');
const Cronofy = require('cronofy');
module.exports = router

var cronofyClient = new Cronofy({
  clientId: process.env.CRONOFY_CLIENT_ID,
  clientSecret: process.env.CRONOFY_CLIENT_SECRET,
  accessToken: 'aLUj9bRInSj1n08pHPAo5ru0OOppDaCO',
  refreshToken: '5hdSBZHgjA4xcQAelyAYWDfezZv0-9yP'
});

passport.use('provider', new OAuth2Strategy({
  responseType: 'code',
  clientID: process.env.CRONOFY_CLIENT_ID,
  callbackURL: process.env.CRONOFY_CALLBACK,
  authorizationURL: 'https://app.cronofy.com/oauth/authorize',
  scope: ['create_calendar', 'read_events', 'create_event', 'delete_event', 'read_free_busy', 'change_participation_status'],
  state: {},
  tokenURL: 'api.cronofy.com/oauth/token',
  clientSecret: process.env.CRONOFY_CLIENT_SECRET,
  // Used for obtaining access token, originally put in for testing, left in for convinience
  // grantType: 'authorization_code',
}, () => { cronofyClient.requestAccessToken( { code: req.query.code, state: req.query.state, redirectUri: "https://google.com" } )}

// console.log("ACCESS", accessToken)
// console.log("REFRESH", refreshToken)
// cronofyClient.requestAccessToken()

  // From cronofy module, takes in the code from OAuth and gives back an access token for user
  // cronofy.prototype.requestAccessToken = function () {
  //   var that = this;
  //   var details = this._parseArguments(arguments, ['client_id', 'client_secret', 'refresh_token']);
  
  //   details.options.grant_type = 'authorization_code';
  
  //   return this._httpPost('/oauth/token', details.options).then(tap(function (token) {
  //     that.config.access_token = token.access_token;
  //     that.config.refresh_token = token.refresh_token;
  
  //     if (details.callback) {
  //       details.callback(null, token);
  //     }
  //   }), details.callback);
  // };

  // Parse Arguments from Cronofy table
  // cronofy.prototype._parseArguments = function (args, configDefaults) {
  //   var parsed = {options: {}, callback: null};
  
  //   if (args.length === 2) {
  //     parsed.options = args[0];
  //     parsed.callback = args[1];
  //   } else {
  //     switch (typeof args[0]) {
  //       case 'object':
  //         parsed.options = args[0];
  //         break;
  //       case 'function':
  //         parsed.callback = args[0];
  //         break;
  //     }
  //   }
  
  //   for (var i = 0; i < configDefaults.length; i++) {
  //     var key = configDefaults[i];
  
  //     parsed.options[key] = parsed.options[key] || this.config[key];
  //   }
  
  //   return parsed;
  // };

));

router.get('/', passport.authenticate('provider'));

router.get('/callback', (req, res, next) =>
  { console.log("In Callback") } )
  // passport.authenticate('provider', { successRedirect: '/user-groups', failureRedirect: '/' }))
