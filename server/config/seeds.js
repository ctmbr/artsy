const db = require("./connection");
const { User, Product, Review } = require("../models");

db.once("open", async () =>
{

    await Product.deleteMany();

    const products = await Product.insertMany(
        [
            {
                name: "Rose Eiffel Tower",
                description:
                    "Glowing light resonates as a spiral of rose petals circle the tower.",
                image: "eiffel.png",
                price: 55.99,
                quantity: 1
            },

            {
                name: "Stained Glass Butterfly",
                description:
                    "A collection of glass contructing a Moncarch butterfly which represents transformation and evolution.",
                image: "butterfly.png",
                price: 34.99,
                quantity: 1
            },

            {
                name: "Sunflower",
                description:
                    "A set of three sunflowers which is an emblem of happiness and usually symbolizes devotion and loyalty.",
                image: "sunflowersonline.png",
                price: 77.99,
                quantity: 1
            },

            {
                name: "Gediminas' Tower",
                description:
                    "A representation of the only remain structure of what was once the city's Upper Castle.",
                image: "gediminopilis.png",
                price: 33.99,
                quantity: 1
            },

            {
                name: "One Forced Woman",
                description:
                    "A take on the infamous 'Three Wise Monkeys', this symbolizes how society involuntarily turns the blind eyes of women in the world.",
                image: "posterdepprocess.jpg",
                price: 114.99,
                quantity: 1
            },

            {
                name: "Nightcrawler",
                description:
                    "Known as being a member of the Marvel comic X-Men, he sits atop a building under the moonlight surveying the world below.",
                image: "nightcrawlerdark.png",
                price: 99.99,
                quantity: 1
            },

            {
                name: "Stairway to the Dark",
                description:
                    "Footprints leads up a staircase to the unknown.",
                image: "SS_Simona_Final_Overall.jpg",
                price: 59.99,
                quantity: 1
            },

            {
                name: "At Candle's End",
                description:
                    "A candle in the dark coming to its end.",
                image: "IMG_20181024_215217.jpg",
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
