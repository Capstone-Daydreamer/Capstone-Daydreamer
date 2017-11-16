const router = require('express').Router()
const { SubCategory, Category } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  SubCategory.findAll({include: [Category]})
    .then(subCategories => res.json(subCategories))
    .catch(next)
})
