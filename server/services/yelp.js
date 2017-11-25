const yelp = require('yelp-fusion');
const clientId = process.env.clientId
const clientSecret = process.env.clientSecret

let client
module.exports = {
  getClient: async function() {
    if (!client) {
      await yelp.accessToken(clientId, clientSecret).then(response => {
        client = yelp.client(response.jsonBody.access_token)
      }).catch(e => {
        console.log(e);
      });
    } 
    return client
  }
}
