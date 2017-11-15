const Sequelize = require('sequelize')
const db = require('../db')

const GroupDay = db.define('groupDay', {
  groupId: {
    type: Sequelize.INTEGER,
    // allowNull: false,
    // isInt: true
  },
  dayId: {
    type: Sequelize.INTEGER,
    // allowNull: false,
    // isInt: true
  }
})

module.exports = GroupDay
