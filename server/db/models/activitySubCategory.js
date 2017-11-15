const Sequelize = require('sequelize')
const db = require('../db')

const ActivitySubCategory = db.define('activitySubCategory', {
  activityId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  },
  subCategoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  }
})

module.exports = ActivitySubCategory
