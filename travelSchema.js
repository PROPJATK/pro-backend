const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    id: String,
    name: String,
    stars: Number,
    link: String,
    address: String,
    opinions: [String],
});

const restaurantSchema = new mongoose.Schema({
    id: String,
    name: String,
    cuisine: String,
    link: String,
    address: String,
    opinions: [String],
});

const attractionSchema = new mongoose.Schema({
    id: String,
    name: String,
    link: String,
    address: String,
    opinions: [String],
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
