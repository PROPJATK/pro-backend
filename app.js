const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const databaseConnection = require('./DataBaseConnection')
const countriesGET = require('./Endpoints/CountriesGET')
const attractionsGET = require('./Endpoints/AttractionGET')
const restaurantsGET = require('./Endpoints/RestaurantsGET')
const hotelsGET = require('./Endpoints/HotelsGET')
const countriesCitiesGET = require('./Endpoints/CitiesGET')
const countryGET = require('./Endpoints/CountryGet')
const cityGET = require('./Endpoints/CityGET')
var cors = require('cors')

const app = express()
const port = 3000

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Travel App API',
      description: 'Travel App API Information',
      contact: {
        name: 'Developer Name',
      },
      servers: ['http://localhost:3000'],
    },
  },
  // ['.routes/*.js']
  apis: ['./Endpoints/*.js'],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs)
)

databaseConnection()

app.use(countriesGET)
app.use(attractionsGET)
app.use(restaurantsGET)
app.use(hotelsGET)
app.use(countriesCitiesGET)
app.use(countryGET)

app.use(cors())

app.listen(port, () => {
  console.log(`Application works on port: ${port}`)
})
