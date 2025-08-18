const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middleWareGlobal, outroMidd } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true}));
app.use(middleWareGlobal);
app.use(outroMidd);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine' , 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log("Acessar: http://localhost:3000");
    console.log("Servidor Executando na porta: 3000");
});

