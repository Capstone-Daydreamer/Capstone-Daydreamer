const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/categories', require('./categories'))
router.use('/subCategories', require('./subCategories'))
router.use('/yelp', require('./yelp'))
router.use('/groups', require('./groups'))
router.use('/days', require('./days'))
router.use('/meetup', require('./meetup'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
