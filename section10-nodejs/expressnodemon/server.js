const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send("Rapaz, el tá sem zap");
});

app.listen(3000, () => {
    console.log("Acessar: http://localhost:3000");
    console.log("Servidor Está Executando na porta: 3000");
});