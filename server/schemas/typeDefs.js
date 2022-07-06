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
    website: URL
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
    posts(username: String): [Thought]
    post(_id: ID!): Thought
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(category: String!, orgName: String!, website: URL!, location: String!): Post
    addComment(postId: ID!, commentText: String!): Post
  }
`;

// export the typeDefs
module.exports = typeDefs;