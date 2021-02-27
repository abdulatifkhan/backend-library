const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const http = require('http')
const PORT = process.env.PORT || 4003

const modules = require('./moduls/index.js')

const server = new ApolloServer({ modules: modules, context: ({ req }) => {

  return {
    token: req.headers.token
  }
} })

const app = express()
server.applyMiddleware({ app, path: '/graphql' })
const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: PORT }, async () => 
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
)