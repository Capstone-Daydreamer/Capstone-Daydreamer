const router = require('express').Router()
const request = require('request');

module.exports = router

router.get('/', (req, res, next) => {
  request({
    url: 'http://api.eventful.com/rest/events/search',
    json: true,
    api_key: 'RnfqpfBxDnsDB5SG',
    location: "CHICAGO",
  }, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.json(body)
  });
})
