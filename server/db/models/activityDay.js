const Sequelize = require('sequelize')
const db = require('../db')

const ActivityDay = db.define('activityDay', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  },
  groupId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  }
})

module.exports = ActivityDay
