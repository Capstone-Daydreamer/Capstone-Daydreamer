const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
    name: {
      type: Sequelize.STRING
    },
    alias: {
      type: Sequelize.STRING
    }
})

module.exports = Category
