const router = require('express').Router()
const meetups = require('meetup-api');
const axios = require('axios');

module.exports = router

// Abandoned in favor of Eventful API
// Ask Ben if you need this up and running at some point
// router.get('/', (req, res, next) => {
//   axios.get('http://api.meetup.com/find/upcoming_events?' +
//     'app_key=' + process.env.MEETUP_API_KEY)
//     .then(response => {
//       res.json(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     })
// })

router.get('/categories', (req, res, next) => {
  axios.get('http://api.meetup.com/find/topic_categories')
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    })
})
