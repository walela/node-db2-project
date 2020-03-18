const knex = require('knex')
const configs = require('../knexfile')

const db = knex(configs.development)

module.exports = db