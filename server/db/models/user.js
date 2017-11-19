const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING
  },
  fbId: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  cronofyAccId: {
    type: Sequelize.STRING
  },
  cronofyRefreshToken: {
    type: Sequelize.STRING
  },
  calendarTokens: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = User

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt) === this.password
}

/**
 * classMethods
 */
User.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password, user.salt)
  }
}

const createSaltAndPassword = person => {
  person.forEach(user => {
    if (user.changed('password')) {
      user.salt = User.generateSalt()
      user.password = User.encryptPassword(user.password, user.salt)
    }
  })
}

User.beforeBulkCreate(createSaltAndPassword)
User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)
