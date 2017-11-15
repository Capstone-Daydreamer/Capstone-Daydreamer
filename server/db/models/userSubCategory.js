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
  userRating: {
    type: Sequelize.INTEGER
  }
})

module.exports = UserSubCategory
