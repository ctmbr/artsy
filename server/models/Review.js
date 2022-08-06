const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reviewSchema = new Schema(
    {
        reviewText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
            trim: true,
        },

        reviewAuthor: {
            type: String,
            required: true,
            trim: true,
        },
        
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
    },
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;