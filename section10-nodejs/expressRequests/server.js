const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}));

app.get('/', (request, response) => {
    response.send("Hello India, I love you guys!!");
});

app.get('/testes/:iduser?', (request, response) => {
    response.send(request.body);
});

app.listen(3000, () => {
    console.log("Acessar: http://localhost:3000");
    console.log("Servidor Executando na porta: 3000");
});