import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($location: String!, $website: String!, $orgName: String!, $category: String!) {
    addPost(location: $location, website: $website, orgName: $orgName, category: $category) {
      _id
      category
      orgName
      website
      location
      description
      username
    }
  }
`;

