const sequalize = require('sequelize')

const db = new sequalize("connect-node", "root", "", {
    dialect: "mysql"
})

db.sync({})

module.exports = db