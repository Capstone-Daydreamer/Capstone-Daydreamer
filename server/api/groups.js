const router = require('express').Router()
const {Group, User} = require('../db/models')
module.exports = router


router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Group.findById(id, {
    include: [User]
  })
    .then(group => {
      res.json(group)
    })
    .catch(next)
})