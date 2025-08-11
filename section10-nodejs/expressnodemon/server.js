const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send("Hello India, I love you guys!!");
});

app.listen(3000, () => {
    console.log("Acessar: http://localhost:3000");
    console.log("Servidor Executando na porta: 3000");
});