const Sequelize = require('sequelize')
const db = require('../db')

const SubCatagory = db.define('subCatagory', {
    name: {
      type: Sequelize.STRING
    }
})

module.exports = SubCatagory
