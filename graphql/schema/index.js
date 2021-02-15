const { buildSchema } = require("graphql")

module.exports = buildSchema(`
  type Friend {
    _id: ID!
    userName: String!
    userStatus: String!
    createdAt: String!
  }

  input FriendInput {
    userName: String!
    userStatus: String!
  }

  type Query {
    friends:[Friend!]
  }

  type Mutation {
    createFriend(friend:FriendInput): Friend
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)