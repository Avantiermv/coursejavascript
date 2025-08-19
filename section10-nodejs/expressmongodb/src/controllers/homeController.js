const homeModel = require('../models/homeModel')

homeModel.create({
    titulo: "Titulo de Teste",
    descrição: "Uma descrição!!"
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.paginaInicial = (request, response) => {
    response.render('index');
    return;
}

exports.trataPost = (request, response) => {
    response.send(request.body);
    return;
}