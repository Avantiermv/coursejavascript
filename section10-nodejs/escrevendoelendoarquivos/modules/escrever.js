const fs = require('fs').promises;


module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8'});
};

//Também posso criar um arquivo json, e esse JSON.stringfy(), pega meu array de objetos e transforma ele em um arquivo json.