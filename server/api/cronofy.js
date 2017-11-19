// import { error } from 'util';

const passport = require('passport');
const router = require('express').Router();
const Cronofy = require('cronofy');

module.exports = router

// EO
// var cronofyClient = new Cronofy({
//   client_id: process.env.CRONOFY_CLIENT_ID,
//   client_secret: process.env.CRONOFY_CLIENT_ID,
//   account_id: 'acc_5a035cd4c631835e9e000a7f',
//   access_token: '8YQblelE_J4LGTDMz6uVt1EIufiPzQf9',
// });

// BO
// var cronofyClient = new Cronofy({
//   client_id: process.env.CRONOFY_CLIENT_ID,
//   client_secret: process.env.CRONOFY_CLIENT_ID,
//   account_id: 'acc_5a0e0f4cc631834e720004d7',
//   access_token: 'XxShWb2gjnkO6CGZtLAQwUVjnyEG3TVn',
//   refresh_token: 'L9KGBv-OAugyTI_2mN8_dt-9NBx9EamT'
// });

// Semi
var cronofyClient = new Cronofy({
  client_id: process.env.CRONOFY_CLIENT_ID,
  client_secret: process.env.CRONOFY_CLIENT_ID,
  account_id: 'acc_5a0e0f4cc631834e720004d7',
  access_token: '0wCVi-szQ5ZcAr_CQzhWZbvjs0jTl3Ix',
  refresh_token: 'L9KGBv-OAugyTI_2mN8_dt-9NBx9EamT'
});

// var cronofyClient = new Cronofy({
//   client_id: process.env.CRONOFY_CLIENT_ID,
//   client_secret: process.env.CRONOFY_CLIENT_ID,
//   account_id: 'acc_5a0e0f4cc631834e720004d7',
//   access_token: 'GXrW94nk5GyIiDqEmLgboPnbcXzhc4N7',
//   refresh_token: 'L9KGBv-OAugyTI_2mN8_dt-9NBx9EamT'
// });


// Route to GET all Calendars
router.get('/', (req, res, next) => {

  var options = {
    tzid: 'Etc/UTC',
  };

  cronofyClient.listCalendars(options)
    .then(function (response) {
      var calendars = response.calendars;
      res.json(calendars);
    })
})

// Route to GET info for a specific account
router.get('/accountinfo', (req, res, next) => {

  var options = {
    tzid: 'Etc/UTC',
  };

  cronofyClient.accountInformation(options)
    .then(function (response) {
      console.log(response);
      var account = response.account;
      res.json(account);
    }).catch(next)
})

// Route to GET availability accross a single group
router.get('/availability', (req, res, next) => {
  var group = [
    { // Bens Information
      account_id: 'acc_5a0e0f4cc631834e720004d7',
      calendar_ids: ['cal_Wg4PW42@zx-aAAE1_vqr0kiOnXqIcyOH@pEbWFg']
    },
    { // Els Info
      account_id: 'acc_5a035cd4c631835e9e000a7f',
      calendar_ids: ['cal_WgNdvo2@z0A0AARz_IxvIQlgfunaFtiEWvAeOoQ']
    },

  ]

  var options = {
    participants: [
      {
        members: [],
        required: 'all'
      }
    ],
    required_duration: { minutes: 60 },
    available_periods: [
      {
        start: '2017-11-21T09:00:00Z',
        end: '2017-11-21T18:00:00Z'
      }
    ]
  }

  group.forEach(user => {
    options.participants[0].members.push({
      sub: user.account_id,
      calendar_ids: user.calendar_ids
    })
    console.log("MEMBERS", options.participants[0].members)
  })

  cronofyClient.availability(options)
  .then(function (response) {
    console.log(response);
    var available_periods = response.available_periods;
    res.json(available_periods);
  }).catch(next)
})
