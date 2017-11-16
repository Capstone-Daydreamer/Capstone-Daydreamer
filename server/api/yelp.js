const router = require('express').Router()
const yelp = require('yelp-fusion');

module.exports = router

router.post('/', (req, res, next) => {
  const clientId = process.env.clientId
  const clientSecret = process.env.clientSecret
  const searchRequest = {
    term: req.body.term,
    location: req.body.location,
    categories: req.body.categories,
    limit: 3
  };

  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search(searchRequest).then(response => {
      const firstResult = response.jsonBody.businesses[0];
      res.json(firstResult)
    });
  }).catch(next);
})
