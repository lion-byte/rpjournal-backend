const cookieParser = require('cookie-parser')
const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const { createServer } = require('./create-server')

const server = createServer()
const app = express()

app.use(cookieParser())

// Decode the JWT to get the user's ID
app.use((req, res, next) => {
  const { token } = req.cookies

  if (token) {
    try {
      // @ts-ignore
      const { userId } = jwt.verify(token, process.env.APP_SECRET)

      // Append the userId to the request parameter
      // @ts-ignore
      req.userId = userId
    } catch (error) {
      console.error(error)
    }
  }

  next()
})

server.applyMiddleware({
  app,
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  },
  path: '/'
})
const { PORT } = process.env

app.listen({ port: PORT }, () => {
  const url = `http://localhost:${PORT}${server.graphqlPath}`

  console.log(`🚀 Server ready at ${url}`)
})
