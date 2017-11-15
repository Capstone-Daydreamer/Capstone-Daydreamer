const Sequelize = require('sequelize')
const db = require('../db')

const ActivityDay = db.define('activityDay', {
  activityId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  },
  dayId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  }
})

module.exports = ActivityDay
