import { gql } from '@apollo/client';

export const QUERY_ORGS = gql`
    query posts($username: String) {
        posts(username: $username) {
            _id
            category
            orgName
            website
            location
            description
            username
     }
}`;

export const QUERY_ORG = gql`
    query post($id: ID!) {
        post(_id: $id) {
            _id
            category
            orgName
            website
            location
            description
            username
        }
    }`;

export const QUERY_CATEGORY = gql `
    query postsByCategory($category: String) {
        postsByCategory(category: $category) {
            _id
            category
            orgName
            website
            location
            description
            username
        }
    }`