const Sequelize = require('sequelize')
const db = require('../db')

// COMMENT - Seems like you're creating join tables manually,
// but I don't see any relations defined...?
const ActivitySubCategory = db.define('activitySubCategory', {
  activityId: {
    type: Sequelize.INTEGER,
    // allowNull: false,
    // isInt: true
  },
  subCategoryId: {
    type: Sequelize.INTEGER,
    // allowNull: false,
    // isInt: true
  }
})

module.exports = ActivitySubCategory
