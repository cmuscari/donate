const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    posts: [Post]
  }

  type Post {
    _id: ID
    postText: String
    category: String
    orgName: String
    website: String
    location: String
    description: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    username: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!, location: String!, website: String!, orgName: String!, category: String!): Post
    addComment(postId: ID!, commentText: String!): Post
  }
`;

// export the typeDefs
module.exports = typeDefs;