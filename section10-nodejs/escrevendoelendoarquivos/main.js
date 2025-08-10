const path = require('path');
const caminhoDoArquivo = path.resolve(__dirname, 'teste.json');

// const escreve = require('./modules/escrever.js');
const leia = require('./modules/ler.js');

// const pessoa = [{nome: "Marcos"}, {nome: "Maria"}, {nome: "Caio"}, {nome: "Mulu"}];
// const meuJson = JSON.stringify(pessoa, '', 2);

// escreve(caminhoDoArquivo, meuJson);

async function lendoArquivo(caminho){
    let dados = await leia(caminho);
    renderizarDados(dados);
}

function renderizarDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));
}

lendoArquivo(caminhoDoArquivo);



