const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Review, Order } = require('../models');
const { signToken } = require('../utils/auth');
require("dotenv").config();
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
        },
        checkout: async (parent, args, context) => 
        {
            const url= new URL(context.headers.referer).origin;
            const order = new Order({ products: args.products });
            const line_items = [];

            const { products } = await order.populate("products");

            for (let i = 0; i < products.length; i++)
            {
                const product = await stripe.products.create({
                    name: products[i].name,
                    description: products[i].description,
                    image: [`${url}/images/${products[i].image}`],
                });

                const price = await stripe.prices.create({
                    product: product.id,
                    unit_amount: products[i].prices * 100,
                    currency: 'usd',
                });

                items.push({
                    price: price.id,
                    quantity: 1
                });
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`
            });

            return { session: session.id };
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
        },
        addOrder: async (parent, { products }, context) =>
        {
            if (context.user) {
                const order = new Order({ products });

                await User.findByIdAndUpdate(context.user._id, {
                    $push: { orders: order } });

                return order;
            }
        }
    }
};

module.exports = resolvers;
