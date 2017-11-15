const Sequelize = require('sequelize')
const db = require('../db')

const SubCategory = db.define('subCategory', {
    name: {
      type: Sequelize.STRING
    }
})

module.exports = SubCategory
