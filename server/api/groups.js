const router = require('express').Router()
const {Group, User, Day, Activity} = require('../db/models')
module.exports = router


router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Group.findById(id, {
    include: [User, {model: Day, include:[Activity]}]
  })
    .then(group => {
      res.json(group)
    })
    .catch(next)
})