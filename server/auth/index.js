const router = require('express').Router()
const {User, Group} = require('../db/models')
module.exports = router

router.post('/login', (req, res, next) => {
  User.findOne({where: {email: req.body.email}, include: [{ all: true, nested: true }]})
    .then(user => {
      if (!user) {
        res.status(401).send('User not found')
      } else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Incorrect password')
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)))
      }
    })
    .catch(next)
})

router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => (err ? next(err) : res.json(user)))
    })
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists')
      } else {
        next(err)
      }
    })
})

router.post('/fb', (req, res, next) => {
  User.find({where: {fbId: req.body.fbId}})
  .then(foundUser => (foundUser
    ? res.json(foundUser)
    : User.create({
        name: req.body.name, 
        email: req.body.email, 
        fbId: req.body.fbId
      })
      .then(createdUser => res.json(createdUser))
  ))
  .catch(next)
})

router.post('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

// router.use('/google', require('./google'))
// router.use('/facebook', require('./facebook'))