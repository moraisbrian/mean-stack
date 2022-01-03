require('dotenv').config();
const express = require('express');
const path = require('path');

const routes = require(path.resolve('src', 'app', 'routes', 'routes.js'));

const app = express();

app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
    next();
});

module.exports = app;