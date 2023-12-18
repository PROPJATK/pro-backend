const express = require('express')
const router = express.Router()
const TravelAppCountriesModel = require('../Schemas/CountriesSchema')
/**
 * @swagger
 * /countries:
 *  get:
 *    description: Use to request all countries
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/countries', async (req, res) => {
  try {
    const documents = await TravelAppCountriesModel.find(
      {},
      'name image -_id'
    )
    res.send(documents)
  } catch (error) {
    console.error(
      'Error retrieving data from collection:',
      error
    )
    res.status(500).send('Internal Server Error')
  }
})

module.exports = router
