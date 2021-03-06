const Sequelize = require('sequelize')
const db = require('../db')

const Group = db.define('group', {
    leader: {
      type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    memberAccountIds: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    description: {
        type: Sequelize.TEXT
    }
})

module.exports = Group
