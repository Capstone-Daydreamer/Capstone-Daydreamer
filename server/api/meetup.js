const router = require('express').Router()
const meetups = require('meetup-api');
const request = require('request');

module.exports = router

router.get('/', (req, res, next) => {
  request({
    url: 'http://api.meetup.com/find/upcoming_events',
    key: process.env.MEETUP_API_KEY,
    json: true,
    lat: 41.8781,
    lon: 87.6298,
  }, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.json(body)
  });
})

router.get('/categories', (req, res, next) => {
  request({url: 'http://api.meetup.com/find/topic_categories', json: true}, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.json(body)
  });
})
