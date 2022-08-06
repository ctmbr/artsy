const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User{
        _id: ID
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        orders: [Order]
    }

    type Product{
        _id: ID
        name: String!
        description: String
        image: String
        price: Float
        releaseDate: String
        quantity: Int
    }

    type Review{
        _id: ID
        reviewBody: String!
        reviewAuthor: String!
        createdAt: String
    }

    type Order{
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User
    }

    type Query{
        user: User
        product(_id: ID!): Product
        checkout(products: [ID]!): Checkout
    }

    type Mutation{
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        updateProduct(_id: ID!, name: String!, description: String!, image: String!, price: Float!, releaseDate: String!, quantity: Int!): Product
        login(email: String!, password: String!): Auth
        addOrder(products: [ID]!):Order
    }
`;

module.exports = typeDefs;