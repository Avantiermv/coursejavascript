exports.paginaInicial = (request, response) => {
    response.send('<form action="/" method="POST"> Nome do Cliente: <input type="text" name="nome"> <button> Olá Mundo </button> </form>');
}

exports.trataPost = (request, response) => {
    response.send('Seu forms foi enviado');
}