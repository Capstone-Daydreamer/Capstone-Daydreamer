const router = require('express').Router()
const { Category } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Category.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
  })
    .then(categories => res.json(categories))
    .catch(next)
})
