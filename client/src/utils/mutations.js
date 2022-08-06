import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) 
    {
        login (email: $email, password: $password) {
            token
            user 
            {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
    ) {        
        addUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_ORDER = gql`
    mutation addOrder($products: ID) {
        addOrder(products: $products) {
            products {
                _id
                name
                description
                price
                quantity
            }
        }
    }
`;


// Not sure if this is actually needed, but leaving it in case.
export const UPDATE_USER = gql`
    mutation updateUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
    ) {
        updateUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
`;