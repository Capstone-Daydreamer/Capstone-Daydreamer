const Sequelize = require('sequelize')
const db = require('../db')

const UserGroup = db.define('userGroup', {
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

module.exports = UserGroup
