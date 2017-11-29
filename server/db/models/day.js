const Sequelize = require('sequelize')
const db = require('../db')

const Day = db.define('day', {
    name: {
      type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    time: {
        type: Sequelize.STRING
    },
    duration: {
        type: Sequelize.INTEGER
    },
    categories: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
    },
    start: {
        type: Sequelize.STRING
    },
    end: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.STRING
    }
})

module.exports = Day
