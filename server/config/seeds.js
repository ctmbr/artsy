const db = require("./connection");
const { User, Product, Review } = require("../models");

db.once("open", async () => {

    await Product.deleteMany();

    const products = await Product.insertMany(
        [
            {
                name: "Eiffel Tower",
                description:
                    "Add description here.",
                image: "eiffel.png",
                price: 55.99,
                quantity: 1
            },

            {
                name: "Butterfly",
                description:
                    "Add the second description here.",
                image: "butterfly.png",
                price: 34.99,
                quantity: 1
            },

            {
                name: "Sunflower",
                description:
                    "Third desciption here.",
                image: "sunflowersonline.png",
                price: 77.99,
                quantity: 1
            },

            {
                name: "Gediminas' Tower",
                description:
                    "Add decription here.",
                image: "gediminopilis.png",
                price: 33.99,
                quantity: 1
            },

            {
                name: "Art Piece 5",
                description:
                    "Add decription here.",
                image: ".jpg",
                price: 114.99,
                quantity: 1
            },

            {
                name: "Art Piece 6",
                description:
                    "Add description here.",
                image: ".jpg",
                price: 399.99,
                quantity: 1
            },

            {
                name: "Art Piece 7",
                description:
                    "Add description here.",
                image: ".jpg",
                price: 199.99,
                quantity: 1
            },

            {
                name: "Art Piece 8",
                description:
                    "Add description here.",
                image: ".jpg",
                price: 99.99,
                quantity: 1
            },
        ]
    );

    console.log("products seeded");

    await User.deleteMany();

    await User.create(
        {
            firstName: "Julius",
            lastName: "Pepperwood",
            email: "jpepperwood@yahoo.com",
            password: "password12345",
        }
    );

    await User.create(
        {
            firstName: "Jessica",
            lastName: "Knight",
            email: "jessknight@hotmail.com",
            password: "password12345"
        }
    );

    console.log("users seeded");

    await Review.deleteMany();

    await Review.create(
        [
            {
                "reviewText": "Art Piece 1 is one of a kind.",
                "reviewAuthor": "Juan Toothy"
            },
            {
                "reviewText": "Art Piece 2 is second to none.",
                "reviewAuthor": "Junior Jr."
            },
            {
                "reviewText": "Art Piece 5 is alive and can drive a bee to its hive.",
                "reviewAuthor": "Dr. Suess"
            },
            {
                "reviewText": "I've seen stranger things than Art Piece 7.",
                "reviewAuthor": "Eleven"
            },
            {
                "reviewText": "If you look at Art Piece 8 sideways, it looks like it goes on forever.",
                "reviewAuthor": "N. Less Lee"
            },
        ]
    );

    console.log("review seeded")

    process.exit();
});
