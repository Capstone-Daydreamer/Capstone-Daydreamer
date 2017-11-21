const router = require('express').Router()
const {Group, User, Day, Activity, SubCategory, Category} = require('../db/models')
const checkAgainst = require('./recommendation')
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

router.get('/recommendations/:id', async (req, res, next) => {
  const id = req.params.id
  const groupInt = []

let currentDay = await Day.findById(id)
let leaderPicks = currentDay.categories
  let day = await Day.findById(id, {
    include: {model: Group, 
      include: {model: User, 
        include:{model: SubCategory,
          include: {model: Category , 
            where: {
              name: {$or: leaderPicks}
            },
            attributes: ['name']}, 
            attributes: ['name']}}
    }})
    .catch(next)
    day.groups[0].users.forEach((user) => {
        user.subCategories.forEach((subcat) => {
          groupInt.push(subcat.dataValues)
        })
      })
    checkAgainst(groupInt)
})