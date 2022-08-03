const db = require("./connection");
const { User, Product, Review } = require("../models");

db.once("open", async () => {

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: "Art Piece 1",
            description:
                "Add description here.",
            image: ".jpg",
            price: 22.99,
            //   quantity: 500
        },
        {
            name: "Art Piece 2",
            description:
                "Add the second description here.",
            image: "jpg",
            price: 11.99,
            //   quantity: 500
        },
        {
            name: "Art Piece 3",
            description:
                "Third desciption here.",
            image: ".jpg",
            price: 77.99,
            //   quantity: 20
        },
        {
            name: "Art Piece 4",
            description:
                "Add decription here.",
            image: ".jpg",
            price: 33.99,
            //   quantity: 50
        },
        {
            name: "Art Piece 5",
            description:
                "Add decription here.",
            image: ".jpg",
            price: 114.99,
            //   quantity: 100
        },
        {
            name: "Art Piece 6",
            description:
                "Add description here.",
            image: ".jpg",
            price: 399.99,
            //   quantity: 30
        },
        {
            name: "Art Piece 7",
            description:
                "Add description here.",
            image: ".jpg",
            price: 199.99,
            //   quantity: 30
        },
        {
            name: "Art Piece 8",
            description:
                "Add description here.",
            image: ".jpg",
            price: 99.99,
            //   quantity: 100
        },
    ]);

    console.log("products seeded");

    await Review.deleteMany();

    await Review.insertMany([
        {

        },
    ]);

    console.log("reviews seeded");

    await User.deleteMany();

    await User.create({
        firstName: "Julius",
        lastName: "Pepperwood",
        email: "jpepperwood@yahoo.com",
        password: "password12345",
    });

    await User.create({
        firstName: "Jessica",
        lastName: "Knight",
        email: "jessknight@hotmail.com",
        password: "password12345"
    });

    console.log("users seeded");

    process.exit();
});
