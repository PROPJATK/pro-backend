const express = require('express')
const router = express.Router()
const TravelAppCountriesModel = require('../Schemas/CountriesSchema')
/**
 * @swagger
 * /api/countries/{countryName}/cities:
 *  get:
 *    description: Use to request all cities of a country
 *    parameters:
 *      - name: countryName
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *        description: Country not found
 *      '500':
 *        description: Internal Server Error
 */
router.get(
  '/api/countries/:country/cities',
  async (req, res) => {
    const countryName = req.params.country

    try {
      const country = await TravelAppCountriesModel.findOne(
        { name: countryName },
        'cities.name cities.image cities.description -_id'
      )
      if (!country) {
        return res
          .status(404)
          .json({ error: 'Country not found' })
      }
      res.json(country)
    } catch (error) {
      console.error('Error retrieving country data:', error)
      res.status(500).send('Internal Server Error')
    }
  }
)

module.exports = router
