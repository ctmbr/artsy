const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Review } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const resolvers = {
    Query: {
        user: async (parent, args, context) =>
        {
            if (context.user)
            {
                const user = await User.findById(context.user._id).populate({
                });

                user.products.sort((a, b) => b.releaseDate - a.releaseDate);

                return user;
            }

            throw new AuthenticationError('Not logged in');
        },
        product: async (parent, { _id }) =>
        {
            return await Product.findById(_id).populate("shop");
        }
    },
    Mutation: {
        addUser: async (parent, args) =>
        {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, args, context) =>
        {
            if (context.user)
            {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true })
            }

            throw new AuthenticationError("You are not logged in");
        },
        updateProduct: async (parent, args, context) =>
        {
            if (context.product)
            {
                return await Product.findByIdAndUpdate(context.product._id, args, { new: true })
            }
        },
        login: async (parent, { email, password }) =>
        {
            const user = await User.findOne({ email });

            if (!user)
            {
                throw new AuthenticationError("Incorrect credentials");
            }

            const correctPw = await User.isCorrectPassword(password);

            if (!correctPw)
            {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers;