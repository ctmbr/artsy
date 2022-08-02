const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User{
        _id: ID
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }

    type Product{
        _id: ID
        name: String!
        description: String
        image: String
        price: Float
    }

    type Review{
        _id: ID
        reviewBody: String!
        username: String!
        createdAt: String
    }

    type Query{}

    type Mutation{}
`;

module.exports = typeDefs;