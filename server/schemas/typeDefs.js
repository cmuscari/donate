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
    postsByCategory(category: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(location: String!, website: String!, orgName: String!, category: String!, description: String): Post
    addComment(postId: ID!, commentText: String!, username: String!): Post
  }
`;

// export the typeDefs
module.exports = typeDefs;
