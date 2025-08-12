const express = require('express');
const route = express.Router();

const homeController = require('./controllers/homeController.js');
const aboutController = require('./controllers/aboutController.js');
const studiesController = require('./controllers/studiesController.js');

route.get('/', homeController.homePage);
route.get('/sobre', aboutController.aboutHome);
route.get('/estudos', studiesController.studiesHome);

module.exports = route;