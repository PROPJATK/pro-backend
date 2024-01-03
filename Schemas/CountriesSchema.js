const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    id: String,
    name: String,
    stars: Number,
    link: String,
    address: String
});

const restaurantSchema = new mongoose.Schema({
    id: String,
    name: String,
    cuisine: String,
    link: String,
    address: String
});

const attractionSchema = new mongoose.Schema({
    id: String,
    name: String,
    link: String,
    address: String
});

const citySchema = new mongoose.Schema({
    id: String,
    name: String,
    image: String,
    description: String,
    hotels: [hotelSchema],
    restaurants: [restaurantSchema],
    attractions: [attractionSchema]
});

const countrySchema = new mongoose.Schema({
    _id: String,
    name: String,
    image: String,
    currency: String,
    population: Number,
    language: String,
    cities: [citySchema]
});

const CountryModel = mongoose.model('Country', countrySchema);

module.exports = CountryModel;
