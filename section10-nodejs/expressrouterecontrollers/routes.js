const express = require('express');
const route = express.Router();

const homeController = require('./controllers/homeController.js');
const contatoController = require('./controllers/contatoControllers.js');

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

route.get('/contato', contatoController.exibirContato);

module.exports = route;