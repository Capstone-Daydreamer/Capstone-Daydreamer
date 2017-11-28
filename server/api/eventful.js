const router = require('express').Router()
const axios = require('axios');
const xmlParse = require('xml2json');

module.exports = router;

router.post('/', (req, res, next) => {
  var options = {
    // Can use any options to refine search here
    // Options at ---  http://api.eventful.com/docs/events/search  ---
    location: req.body.location,
    date: 'This Week',
    // can also do date range as YYYYMMDD00-YYYYMMDD00
    sort_order: 'popularity',
    category: req.body.category,
    keywords: req.body.keywords,
    page_size: 3
  }
  axios.get('http://api.eventful.com/rest/events/search?' +
    'app_key=' + process.env.EVENTFUL_API_KEY +
    '&location=' + options.location +
    '&date=' + options.date +
    '&sort_order=' + options.sort_order +
    '&category=' + options.category +
    '&page_size=' + options.page_size +
    '&keywords=' + options.keywords)
    .then(response => {
      const data = xmlParse.toJson(response.data) // Turns original XML response to JSON.
      res.json(JSON.parse(data));                //  Takes string representing JSON response and turns it into usable data.
    })
    .catch(error => {
      console.log(error);
    })
})

router.get('/categories', (req, res, next) => {
  axios.get('http://api.eventful.com/rest/categories/list?' +
    'app_key=' + process.env.EVENTFUL_API_KEY)
    .then(response => {
      const data = xmlParse.toJson(response.data)
      res.json(JSON.parse(data));
    })
    .catch(error => {
      console.log(error);
    })
})
