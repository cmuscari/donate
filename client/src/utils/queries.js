import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
        _id
        category
        orgName
        website
        location
        description
        createdAt
        username
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY = gql`
  query postsByCategory($category: String!) {
    postsByCategory(category: $category) {
        _id
        category
        orgName
        website
        location
        description
        createdAt
        username
    }
  }
`;