const router = require('express').Router()
const meetups = require('meetup-api');
const request = require('request');

module.exports = router

request.json = true;
router.get('/', (req, res, next) => {
  const options = {
    api_key: process.env.MEETUP_API_KEY,
  };

  request('http://api.meetup.com/find/topic_categories', (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    console.log('request:', request);
    res.json(body)
  });
})
