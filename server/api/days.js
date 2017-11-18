const router = require('express').Router()
const { Day, GroupDay } = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
    console.log('made it to step 3')
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
    console.log('looking for', req.body)
  GroupDay.create(req.body)
    .then(() => {
        res.sendStatus(201)
    })
    .catch(next)
})
