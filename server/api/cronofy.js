const passport = require('passport');
const router = require('express').Router();
const Cronofy = require('cronofy');

var client = new Cronofy({
  accessToken: 'L2LS_sXdEkeMx_Z7iw9Bxw31667D6fkg',
});

module.exports = router

// Route to GET all Calendars
router.get('/', (req, res, next) => {

  var options = {
    tzid: 'Etc/UTC',
  };

  client.listCalendars(options)
    .then(function (response) {
      var calendars = response.calendars;
      res.json(calendars);
    }).catch(next);
})

// Route to find availability
router.post('/availability', (req, res, next) => {
  var options = {
    participants: [
      {
        members: [
          {
            sub: 'acc_567236000909002',
            calendarIds: ['cal_n23kjnwrw2_jsdfjksn234']
          },
          {
            sub: 'acc_678347111010113',
            availablePeriods: [
              {
                start: '2017-11-22T09:00:00Z',
                end: '2017-11-22T12:00:00Z'
              },
              {
                start: '2017-11-23T10:00:00Z',
                end: '2017-11-23T20:00:00Z'
              }
            ]
          }
        ],
        required: 'all'
      }
    ],
    requiredDuration: { minutes: 60 },
    availablePeriods: [
      {
        start: '2017-11-22T09:00:00Z',
        end: '2017-11-22T18:00:00Z'
      },
      {
        start: '2017-11-23T09:00:00Z',
        end: '2017-11-23T18:00:00Z'
      }
    ]
  };

  client.availability(options)
    .then(function (response) {
      var calendars = response.calendars;
      res.json(calendars);
    }).catch(next);
})

// Route to authenticate user

// https://app.cronofy.com/oauth/authorize
//   ?response_type=code
//   &client_id=BC0d1kiShhx1uhUm8dx6DUVt-0OjN-vn
//   &redirect_uri=localhost:8080
//   &scope=read_events%20create_event%20read_free_busy
//   &state={ "Jibbly":"Gibblets" }
