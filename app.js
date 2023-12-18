const express = require('express');
const databaseConnection = require('./DataBaseConnection');
const countriesGET = require('./Endpoints/CountriesGET');
const countriesCitiesGET = require('./Endpoints/CitiesGET');
const countryGET = require('./Endpoints/CountryGet');

const app = express();
const port = 3000;

databaseConnection();

app.use(countriesGET);
app.use(countriesCitiesGET);
app.use(countryGET);

app.listen(port, () => {
    console.log(`Application works on port: ${port}`);
});