const router = require('express').Router()
const {User, UserSubCategory} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id)
  .then((user)=> {
    user.correctPassword(req.body.password)
  })
  .catch(next);
});

router.post('/add', (req, res, next) => {
  UserSubCategory.create(req.body)
  .then((instance) => {
    res.json(instance)
  })
  .catch()
})

router.delete('/remove/:userId/:subCategoryId', (req, res, next) => {
  UserSubCategory.destroy({
    where: {
      userId: req.params.userId,
      subCategoryId: req.params.subCategoryId
    }
  })
  .then(() => {
    res.sendStatus(201)
  })
  .catch()
})

router.get('/:id', (req, res, next) => {
  User.findOne({where: {id: req.params.id}, include: [{ all: true, nested: true }]})
  .then(user => {
    res.json(user)
  })
  .catch(next)
})
