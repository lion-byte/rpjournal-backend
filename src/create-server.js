const { ApolloServer } = require('apollo-server-express')
const { importSchema } = require('graphql-import')
const path = require('path')

const { Mutation } = require('./resolvers/mutation')
const { Query } = require('./resolvers/query')
const { db } = require('./db')

const createServer = () => {
  const typeDefs = importSchema(path.resolve(__dirname, './schema.graphql'))

  return new ApolloServer({
    // @ts-ignore
    typeDefs,
    resolvers: {
      Query,
      Mutation,
      // To get rid of a noisy, unnecessary warning
      Node: { __resolveType: () => null }
    },
    mocks: false,
    mockEntireSchema: false,
    context: context => ({ ...context, db })
  })
}

module.exports = { createServer }
