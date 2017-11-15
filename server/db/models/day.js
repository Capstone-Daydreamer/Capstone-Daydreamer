const Sequelize = require('sequelize')
const db = require('../db')

const Day = db.define('day', {
    name: {
      type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    }
})

module.exports = Day
