const sequelize = require('sequelize')
const dbconfig = require('../config/database')
const Produtos = require('../models/produtos')

const connection = new sequelize(dbconfig)

Produtos.init(connection)

module.exports = connection;