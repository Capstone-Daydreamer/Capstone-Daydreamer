const clientId = process.env...
const clientSecret = process.env...
const yelp = require("yelp-fusion")

const client

module.exports = {
  getClient: function() {
    if (!client) {
      client = await yelp.accessToken(clientId, clientSecret)
    } 

    return client
  }
}
