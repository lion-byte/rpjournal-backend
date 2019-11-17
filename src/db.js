const { Prisma } = require('prisma-binding')
const path = require('path')

const db = new Prisma({
  typeDefs: path.resolve(__dirname, './generated/prisma.graphql'),
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
})

module.exports = { db }
