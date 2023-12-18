const express = require('express');
const databaseConnection = require('./DataBaseConnection');
const countriesGET = require('./Endpoints/CountriesGET');
const attractionsGET = require('./Endpoints/AttractionGET');

const app = express();
const port = 3000;

databaseConnection();

app.use(countriesGET);
app.use(attractionsGET);

app.listen(port, () => {
    console.log(`Application works on port: ${port}`);
});