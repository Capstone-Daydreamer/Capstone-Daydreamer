const router = require('express').Router()
const { SubCategory, Category, UserSubCategory } = require('../db/models')
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


router.get('/dislikes/:id', (req, res, next) => {
  UserSubCategory.findAll(
    {where: {
      userId: req.params.id,
      dislike: true
    }}
  )
  .then(dislike => res.json(dislike))
  .catch(next)
})

router.get('/likes/:id', (req, res, next) => {
  UserSubCategory.findAll(
    {where: {
      userId: req.params.id,
      love: true
    }}
  )
  .then(like => res.json(like))
  .catch(next)
})