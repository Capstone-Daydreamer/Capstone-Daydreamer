const router = require('express').Router()
// const yelp = require('yelp-fusion');
const yelp = require('../services/yelp')

module.exports = router

router.post('/', (req, res, next) => {

  yelpClient = await yelp.getClient()

  const searchRequest = {
    term: req.body.term,
    location: req.body.location,
    categories: req.body.categories,
    limit: 3
  };

  // COMMENT - Move the yelp client to its own module. It may need an init() method since it's async
    yelpClient.search(searchRequest).then(response => {
      const firstResult = response.jsonBody.businesses[0];
      res.json(firstResult)
    }).catch(next);;
})
