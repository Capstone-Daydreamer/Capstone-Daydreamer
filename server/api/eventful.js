const router = require('express').Router()
const request = require('request');
const axios = require('axios');

module.exports = router;

// QUESTION: Is there an easy way to convert XML to JSON, or should I create a function for that?
router.get('/', (req, res, next) => {
  var options = {
    location: 'Chicago'
  }
  axios.get('http://api.eventful.com/rest/events/search?' +
    'app_key=' + process.env.EVENTFUL_API_KEY +
    '&location=' + options.location)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    })
})

router.get('/categories', (req, res, next) => {
  axios.get('http://api.eventful.com/rest/categories/list?' +
    'app_key=' + process.env.EVENTFUL_API_KEY)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    })
})
