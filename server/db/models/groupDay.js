const Sequelize = require('sequelize')
const db = require('../db')

const GroupDay = db.define('groupDay', {
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

module.exports = GroupDay
