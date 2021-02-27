const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    user: User!
  }

  type User {
    id: Int!
    username: String!
  }
`