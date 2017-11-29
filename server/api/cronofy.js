// import { error } from 'util';

const passport = require('passport');
const router = require('express').Router();
const Cronofy = require('cronofy');
const { User } = require('../db/models');

module.exports = router

// BO
var cronofyClient = new Cronofy({
  client_id: process.env.CRONOFY_CLIENT_ID,
  client_secret: process.env.CRONOFY_CLIENT_ID,
  account_id: 'acc_5a0e0f4cc631834e720004d7',
  access_token: 'XxShWb2gjnkO6CGZtLAQwUVjnyEG3TVn',
  refresh_token: 'L9KGBv-OAugyTI_2mN8_dt-9NBx9EamT'
});

// Route to GET all Calendars
router.get('/:userId', async (req, res, next) => {
  const user = await User.findById(req.params.userId)

  // Code to abstract client privilages
  // To be used for each route, with different parameters depending on bare minimum needed
  // var cronofyClient = new Cronofy({
  //   client_id: process.env.CRONOFY_CLIENT_ID,
  //   client_secret: process.env.CRONOFY_CLIENT_ID,
  //   account_id: user.cronofyAccId,
  //   access_token: user.cronofyAccessToken,
  //   refresh_token: user.cronofyRefreshToken,
  // });

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
router.get('/accountinfo/:userId', (req, res, next) => {

  var options = {
    tzid: 'Etc/UTC',
  };

  cronofyClient.accountInformation(options)
    .then(function (response) {
      var account = response.account;
      res.json(account);
    }).catch(next)
})

// router.get('/availability/', (req, res, next) => {
  
//     var options = {
//       tzid: 'Etc/UTC',
//     };
  
//     cronofyClient.accountInformation(options)
//       .then(function (response) {
//         var account = response.account;
//         res.json(account);
//       }).catch(next)
//   })

// Route to GET availability accross a single group
router.post('/availability/:groupId', (req, res, next) => {
  const currentDay = req.body

  var group = [
    // Needs to abstracted still
    // group = everyone in group with account id and relevant calendar ids
    { // Bens Information
      account_id: 'acc_5a0e0f4cc631834e720004d7',
      calendar_ids: ['cal_Wg4PW42@zx-aAAE1_vqr0kiOnXqIcyOH@pEbWFg']
    },

  ]

  var options = {
    participants: [
      {
        members: [],
        required: 'all'
      }
    ],
    // required_duration: { minutes: currentDay.duration },
    required_duration: { minutes: 60 },
    available_periods: [
      // {
      //   start: currentDay.start + ':00Z',
      //   end: currentDay.end + ':00Z'
      // }
      {
        start: '2017-12-26T09:00:00Z',
        end: '2017-12-26T11:00:00Z'
      }
    ]
  }

  group.forEach(user => {
    options.participants[0].members.push({
      sub: user.account_id,
      calendar_ids: user.calendar_ids
    })
  })

  cronofyClient.availability(options)
  .then(function (response) {
    // var available_periods = response.available_periods;
    // res.json(available_periods)
    res.json({
      available_periods: [
        {
          start: '2017-12-26T09:00:00Z',
          end: '2017-12-26T11:00:00Z',
          participants: [
            { sub: 'acc_567236000909002' },
            { sub: 'acc_678347111010113' }
          ]
        },
        {
          start: '2017-12-27T11:00:00Z',
          end: '2017-12-27T17:00:00Z',
          participants: [
            { sub: 'acc_567236000909002' },
            { sub: 'acc_678347111010113' }
          ]
        },
      ]
    });
  }).catch(next)
})
