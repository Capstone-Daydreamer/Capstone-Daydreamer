const router = require('express').Router()
const { User, Activity } = require('../db/models')
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