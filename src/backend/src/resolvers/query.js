const { forwardTo } = require('prisma-binding')

// const { db } = require('../db')

const Query = {
  adventures: forwardTo('db')
}

module.exports = { Query }