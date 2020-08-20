const sequalalize = require('sequelize')
const db = require('../config/db')

const User = db.define("user", {
    nama: {type: sequalalize.STRING},
    email: {type: sequalalize.STRING},
    umur: {type: sequalalize.INTEGER},
})

User.sync({})

module.exports = User