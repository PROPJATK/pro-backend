const express = require('express')
const router = express.Router()
const TravelAppCountriesModel = require('../Schemas/CountriesSchema')
/**
 * @swagger
 * /api/countries/{countryName}/cities/{cityName}/restaurants:
 *  get:
 *    description: Use to request all restaurants of a city in a country
 *    parameters:
 *      - name: countryName
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *      - name: cityName
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *        description: Country or City not found
 *      '500':
 *        description: Internal Server Error
 */
router.get(
  '/api/countries/:countryName/cities/:cityName/restaurants',
  async (req, res) => {
    try {
      const countryName = req.params.countryName
      const cityName = req.params.cityName
      const country = await TravelAppCountriesModel.findOne(
        { name: countryName }
      )

      if (!country) {
        return res.status(404).send('Country not found')
      }

      const city = country.cities.find(
        (city) => city.name === cityName
      )

      if (!city) {
        return res.status(404).send('City not found')
      }

      res.send(city.restaurants)
    } catch (error) {
      console.error(
        'Error retrieving data from collection:',
        error
      )
      res.status(500).send('Internal Server Error')
    }
  }
)

module.exports = router
