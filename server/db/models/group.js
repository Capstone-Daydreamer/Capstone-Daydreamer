const Sequelize = require('sequelize')
const db = require('../db')

const Group = db.define('group', {
    leader: {
      type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    }
})

module.exports = Group
