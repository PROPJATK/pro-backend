const mongoose = require('mongoose');

const opinionSchema = new mongoose.Schema({
    text: String,
});

const hotelSchema = new mongoose.Schema({
    id: String,
    name: String,
    stars: Number,
    link: String,
    address: String,
    opinions: [opinionSchema],
});

const restaurantSchema = new mongoose.Schema({
    id: String,
    name: String,
    cuisine: String,
    link: String,
    address: String,
    opinions: [opinionSchema],
});

const attractionSchema = new mongoose.Schema({
    id: String,
    name: String,
    link: String,
    address: String,
    opinions: [opinionSchema],
});

const citySchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    hotels: [hotelSchema],
    restaurants: [restaurantSchema],
    attractions: [attractionSchema],
});

const travelSchema = new mongoose.Schema({
    _id: {
        $oid: String,
    },
    name: String,
    currency: String,
    population: Number,
    language: String,
    cities: [citySchema],
});





module.exports = mongoose.model('Country', travelSchema);
