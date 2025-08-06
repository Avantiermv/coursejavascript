import gerarSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const quantidade = document.querySelector('.quantidade');
const maiusculas = document.querySelector('.maiusculas');
const minusculas = document.querySelector('.minusculas');
const simbolos = document.querySelector('.simbolos');
const numeros = document.querySelector('.numeros');
const gerarSenhaButton = document.querySelector('.gerar-senha-button');

export default () => {
    gerarSenhaButton.addEventListener('click', () => {
        senhaGerada.innerHTML = geração();
    });
}

function geração(){
    const senha = gerarSenha(
        quantidade.value,
        minusculas.checked,
        maiusculas.checked,
        numeros.checked,
        simbolos.checked
    );
    return senha || 'nada selecionado';
}