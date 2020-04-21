const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/healthyhumanproject"
);

const ailmentSeed = [
    {
        Ailment: "Headache",
        Method: "Pharmaceutical"
    },
    {
        Ailment: "Headache",
        Method: "Non-Pharmaceutical"
    },
    {
        Ailment: "Backpain",
        Method: "Pharmaceutical"
    },
    {
        Ailment: "Backpain",
        Method: "Non-Pharmaceutical"
    },
]

db.Ailments
    .deleteMany({})
    .then(() => db.Ailments.collection.insertMany(ailmentSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });