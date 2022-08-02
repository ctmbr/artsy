const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User{}

    type Product{}

    type Review{}

    type Query{}

    type Mutation{}
`;

module.exports = typeDefs;