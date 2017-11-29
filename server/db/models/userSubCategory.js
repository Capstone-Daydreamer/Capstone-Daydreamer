const Sequelize = require('sequelize')
const db = require('../db')

const UserSubCategory = db.define('userSubCategory', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  },
  subCategoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  },
  love: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  dislike: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = UserSubCategory
