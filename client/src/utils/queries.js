import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    {
        user {
            firstName
            lastName
            email
        }
    }
`;

export const QUERY_CHECKOUT = gql`
    query getCheckout($products: [ID]!) 
    {
        checkout(products: $products) {
            session
        }
    }
`;