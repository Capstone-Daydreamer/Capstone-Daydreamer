const Sequelize = require('sequelize')
const db = require('../db')

const UserActivity = db.define('userActivity', {
  userId: {
    type: Sequelize.INTEGER,
    // allowNull: false,
    // isInt: true
  },
  activityId: {
    type: Sequelize.INTEGER,
    // allowNull: false,
    // isInt: true
  },
  userRating: {
    type: Sequelize.INTEGER
  }
})

module.exports = UserActivity

