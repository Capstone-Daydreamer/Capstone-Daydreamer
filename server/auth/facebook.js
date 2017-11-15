// const passport = require('passport')
// const router = require('express').Router()
// const {User} = require('../db/models')
// module.exports = router

// FB.login(response => {
//   if (response.status === 'connected') {
//     // Logged into your app and Facebook.
//     const facebookId = 

//     User.find({where: {facebookId}})
//     .then(foundUser => (foundUser
//       ? done(null, foundUser)
//       : User.create({name, email, googleId})
//         .then(createdUser => done(null, createdUser))
//     ))
//     .catch(done)
//   } else {
//     // The person is not logged into this app or we are unable to tell. 
//   }
// });