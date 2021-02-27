const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar Response

  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    registerUser(username: String! password: String!): Response!
    loginUser(username: String! password: String!): Response!
    addPermisson(userId: Int! permissionCode: Int!): Response!
  }

  extend type Subscription {
    newUser: User!
  }

  type User {
    id: Int!
    username: String!
  }
`