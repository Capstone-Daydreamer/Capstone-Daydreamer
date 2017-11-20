const router = require('express').Router()
module.exports = router

router.use('/subCategories', require('./subCategories'))
router.use('/categories', require('./categories'))
router.use('/eventful', require('./eventful'))
router.use('/meetup', require('./meetup'))
router.use('/groups', require('./groups'))
router.use('/users', require('./users'))
router.use('/yelp', require('./yelp'))
router.use('/days', require('./days'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
