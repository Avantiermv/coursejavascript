const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}));

app.get('/', (request, response) => {
    response.send('<form action="/" method="POST"> Nome do Cliente: <input type="text" name="nome"> <button> Olá Mundo </button> </form>');
});

app.post('/', (request, response) => {
    console.log(request.body);
    response.send(`Recebi seu forms: ${request.body.nome}`);
});

app.get('/testes/:iduser?/:parametro?', (request, response) => {
    console.log(request.params);
    console.log(request.query);
});

app.listen(3000, () => {
    console.log("Acessar: http://localhost:3000");
    console.log("Servidor Executando na porta: 3000");
});