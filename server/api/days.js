const router = require('express').Router()
const { Day, GroupDay, Activity } = require('../db/models')
module.exports = router

const reject = (status, msg, next) => {
    const err = new Error(msg)
    err.status = status;
    next(err);
}


router.post('/', (req, res, next) => {
    Day.create({
      name: req.body.currentDay.name,
      categories: req.body.cats,
      start: req.body.currentDay.start,
      end: req.body.currentDay.end,
      duration: req.body.currentDay.duration,
      location: req.body.currentDay.location
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

router.put('/:id', (req, res, next) => {
    Day.update(req.body, {
        where: {
            id: req.params.id
        }
    })
      .then(() => {
          res.sendStatus(201)
      })
      .catch(next)
  })
  

router.get('/:id', (req, res, next) => {
    const id = req.params.id
    Day.findById(id, {
        include: [Activity]
    })
        .then((day) => {
            res.json(day)
        })
        .catch(next)
})
