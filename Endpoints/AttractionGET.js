const express = require('express');
const router = express.Router();
const TravelAppCountriesModel = require('../Schemas/CountriesSchema');

router.get('/:countryName/:cityName/attractions', async (req, res) => {
    const countryName = req.params.countryName;
    const cityName = req.params.cityName;
    const country = await TravelAppCountriesModel.findOne({ name: countryName });

    try {

        if (!country) {
            return res.status(404).send('Country not found');
        }

        const city = country.cities.find(city => city.name === cityName);

        if (!city) {
            return res.status(404).send('City not found');
        }

        res.send(city.attractions);
    } catch (error) {
        console.error('Error retrieving data from collection:', error);
        res.status(500).send('Internal Server Error');
    }



});


module.exports = router;