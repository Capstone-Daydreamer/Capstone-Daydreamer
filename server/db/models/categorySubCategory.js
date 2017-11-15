const Sequelize = require('sequelize')
const db = require('../db')

const CategorySubCategory = db.define('categorySubCategory', {
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  },
  subCategoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    isInt: true
  }
})

module.exports = CategorySubCategory
