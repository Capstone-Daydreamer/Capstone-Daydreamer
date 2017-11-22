const router = require('express').Router()
const { SubCategory, Category } = require('../db/models')
module.exports = router

// router.get('/:id', (req, res, next) => {
//   SubCategory.findAll({where: {
//     userId: req.params.id
//   }})
//     .then(subCategories => res.json(subCategories))
//     .catch(next)
// })

router.get('/', (req, res, next) => {
  SubCategory.findAll({include: [Category]})
    .then(subCategories => res.json(subCategories))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  SubCategory.findById(req.params.id, {include: [Category]})
    .then(subCategories => res.json(subCategories))
    .catch(next)
})