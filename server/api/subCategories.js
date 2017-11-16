const router = require('express').Router()
const { SubCategory } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  SubCategory.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
  })
    .then(subCategories => res.json(subCategories))
    .catch(next)
})