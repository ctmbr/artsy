const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const resolvers = {
    Query: {
        products: async (parent, { name }) =>
        {
            const params = {};
        }
    }
};

module.exports = resolvers;