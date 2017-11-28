const Sequelize = require('sequelize')
const db = require('../db')

const Activity = db.define('activity', {
    name: {
      type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    location: {
        type: Sequelize.STRING
    },
    description: {
       type: Sequelize.TEXT
    },
    time: {
      type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    rating: {
        type: Sequelize.FLOAT
    },
    price: {
        type: Sequelize.STRING
    },
    venueName: {
        type: Sequelize.STRING
    }
})

module.exports = Activity;
