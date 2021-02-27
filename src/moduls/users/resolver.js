
const pubsub = require('../../lib/pubsub.js')
const { sign, verify } = require('../../lib/jwt.js')
const { users, permissions } = require('../../database/database.js')

const SECRET_KEY = 'olma'

module.exports = {
  Query: {
    users: async (_, args, { token }) => {
      return users
    }
  },

  Mutation: {
    registerUser: (_, { username, password }) => {
      let user = {
        id: users.length + 1,
        username,
        password
      }
      pubsub.publish('NEW_USER', user)
      users.push(user)
      return {
        message: 'You are registered!',
        token: sign({ id: user.id })
      }
    },
    loginUser: (_, { username, password }) => {
      let user = users.find(e => e.username === username && e.password === password)
      if(user) {
        return {
          message: 'You are loggen in!',
          token: sign({ id: user.user_id })
        }
      } else {
        return {
          message: 'Not found!',
          token: null
        }
      }
    },
    addPermisson: (_, { userId, permissionCode }, { token }) => {
      let perm = {
        permission_id: permissions[permissions.length - 1].permission_id + 1,
        user_id: userId,
        permission_code: permissionCode
      }
      permissions.push(perm)
      return 'permisson added!'
    }
  },

  Subscription: {
    newUser: {
      subscribe: () => pubsub.asyncIterator(['NEW_USER']), 
      resolve: (payload) => {
        return payload
      },
    }
  },

  User: {
    id: (user) => user.user_id,
  }
}