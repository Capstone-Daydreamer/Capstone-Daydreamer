const router = require('express').Router()
const { User, Activity, ActivityDay, Day } = require('../db/models')
module.exports = router

// router.get('/:id', (req, res, next) => {
//   UserActivity.findAll({
//       where: {
//           userId: req.params.id,
//           include: {model: Activity}
//       }
//   })
//     .then(activities => res.json(activities))
//     .catch(next)
// })

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  User.findById(id, {
    include: [Activity]
  })
    .then(user => {
      res.json(user.activities)
    })
    .catch(next)
})

router.post('/days', (req, res, next) => {
  ActivityDay.create(req.body)
    .then(() => res.sendStatus(201))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Activity.create(req.body)
    .then(event => res.json(event))
    .catch(next)
})
