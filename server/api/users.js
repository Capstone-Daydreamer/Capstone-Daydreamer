const router = require('express').Router()
const {User} = require('../db/models')
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
  console.log('hit the back end')
  User.findById(req.params.id)
  .then((user)=> {
    user.correctPassword(req.body.password)
  })
  .catch(next);
});
