exports.paginaInicial = (request, response) => {
    response.render('index');
}

exports.trataPost = (request, response) => {
    response.send('Seu forms foi enviado');
}