import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    {
        user {
            firstName
            lastName
            email
            orders {
                _id
                purchaseDate
                products {
                    _id
                    name
                    description
                    image
                    price
                    quantity
                }
            }
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

export const QUERY_ALL_PRODUCTS = gql`
    query getProducts{
        products {
            _id
            name
            description
            image
            price
            quantity
        }
    }
`

export const QUERY_PRODUCTS = gql`
    query singleProduct($productId: ID!){
        product(productId: $productId){
            _id
            name
            description
            image
            price
            quantity
        }
    }
`

export const QUERY_ALL_REVIEWS = gql`
    query getReviews{
       reviews {
            _id
            reviewText
            reviewAuthor
            createdAt
       } 
    }
`