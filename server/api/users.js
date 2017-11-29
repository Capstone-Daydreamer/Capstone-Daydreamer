const router = require('express').Router()
const {User, UserSubCategory, Group, Day, SubCategory, Activity} = require('../db/models')
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

router.get('/all', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email', 'name']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.put('/love', (req, res, next) => {
  UserSubCategory.update(req.body, {
    where: {
      userId: req.body.userId,
      subCategoryId: req.body.subCategoryId
    },
    returning: true
  })
  .then((instance) => {
    res.json(instance[1][0])
  })
  .catch()
})

router.put('/hate', (req, res, next) => {
  UserSubCategory.update(req.body, {
    where: {
      userId: req.body.userId,
      subCategoryId: req.body.subCategoryId
    },
    returning: true
  })
  .then((instance) => {
    res.json(instance[1][0])
  })
  .catch()
})

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id)
  .then((user)=> {
    user.correctPassword(req.body.password)
  })
  .catch(next);
});

router.post('/add/love', (req, res, next) => {
  UserSubCategory.create(req.body)
  .then((instance) => {
    res.json(instance)
  })
  .catch()
})


router.post('/add/dislike', (req, res, next) => {
  UserSubCategory.create(req.body)
  .then((instance) => {
    res.json(instance)
  })
  .catch()
})

router.get('/subCategory/:id', (req, res, next) => {
  UserSubCategory.findAll({
    where: {
      userId: req.params.id,
    }
  })
  .then((items) => {
    res.json(items)
  })
  .catch()
})

router.get('/:id', (req, res, next) => {
  User.findOne({where: {id: req.params.id}, include: [{ model: Group, include: [{ model: Day}] }, { model: SubCategory}, { model: Activity}]})
  .then(user => {
    res.json(user)
  })
  .catch(next)
})
