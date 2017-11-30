// import { error } from 'util';

const passport = require('passport');
const router = require('express').Router();
const Cronofy = require('cronofy');
const { User, Group } = require('../db/models');

module.exports = router

// BO
var cronofyClient = new Cronofy({
  client_id: process.env.CRONOFY_CLIENT_ID,
  client_secret: process.env.CRONOFY_CLIENT_ID,
  // account_id: 'acc_5a0e0f4cc631834e720004d7',
  access_token: 'kQjGF1tChy4bLcN5_sQD8MkIThd17nZF',
  refresh_token: process.env.CRONOFY_REFRESH
});

// Route to GET all Calendars
router.get('/:userId', async (req, res, next) => {
  var options = {
    tzid: 'Etc/UTC',
  };

  cronofyClient.listCalendars(options)
    .then(async (response) => {
      let user = await User.findById(req.params.userId)

      let calendarArr = [];
      var calendars = response.calendars;
      calendars.forEach(calendar => calendarArr.push(calendar.calendar_id))
      await user.update({
        calendarTokens: calendarArr,
      });
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
router.get('/availability/:groupId', async (req, res, next) => {
  const group = await Group.findById(req.params.groupId, { include: [User] });
  const users = group.users;
  // const currentDay = req.body
  res.json({
    "available_periods": [
      {
        "start": "2017-12-26T09:00:00Z",
        "end": "2017-12-26T11:00:00Z",
        "participants": [
          { "sub": "acc_567236000909002" },
          { "sub": "acc_678347111010113" }
        ]
      },
      {
        "start": "2017-12-27T11:00:00Z",
        "end": "2017-12-27T17:00:00Z",
        "participants": [
          { "sub": "acc_567236000909002" },
          { "sub": "acc_678347111010113" }
        ]
      },
    ]
  })
  // Create options to be sent into the API
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

  // Looks at each user and adds their Cronofy authentication info to the object
  users.forEach(user => {
    options.participants[0].members.push({
      sub: user.cronofyAccId,
      calendar_ids: user.calendarTokens
    })
  })

  // Checks availability using Options combined with relevant User info
  // res.json(options)
  cronofyClient.availability(options)
    .then(function (response) {
      var available_periods = response.available_periods;
      // res.json(available_periods)
      // Dummy JSON data for testing reasons
      
    }).catch(next)
})
