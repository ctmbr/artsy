const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String
        },

        image: {
            type: String
        },

        price: {
            type: Number,
            required: true,
            min: 0.99
        },

        releaseDate: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },

        quantity: {
            type: Number,
            min: 0,
            default: 1
        },

        //   category: {
        //     type: Schema.Types.ObjectId,
        //     ref: "Category",
        //     required: true
        //   }
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;