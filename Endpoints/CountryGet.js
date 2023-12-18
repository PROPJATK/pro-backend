const express = require('express');
const router = express.Router();
const TravelAppCountriesModel = require('../Schemas/CountriesSchema');

router.get('/:country', async (req, res) => {
    const countryName = req.params.country;
    try {
        const country = await TravelAppCountriesModel.findOne({ name: countryName }, 'name image currency population language cities.name cities.image -_id');
        if (!country) {
            return res.status(404).json({ error: 'Country not found' });
        }
        res.json(country);
    } catch (error) {
        console.error('Error retrieving country data:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;