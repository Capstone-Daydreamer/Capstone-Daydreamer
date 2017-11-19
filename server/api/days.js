const router = require('express').Router()
const { Day, GroupDay } = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
  Day.create({
      name: req.body.name,
      date: req.body.date
  })
    .then((day) => {
        res.json(day)
    })
    .catch(next)
})

router.post('/groups', (req, res, next) => {
  GroupDay.create(req.body)
    .then(() => {
        res.sendStatus(201)
    })
    .catch(next)
})
