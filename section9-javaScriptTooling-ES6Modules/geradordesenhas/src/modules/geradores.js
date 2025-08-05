const rand = (min, max) => Math.floor(Math.random() * (min-max) + max);

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));

const simbolos = '^~#@%*&!$+=';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

function gerarSenha(qunatidade, minusculas, maisculas, numeros, simbolos){
    const senhaArray = [];
    qunatidade = Number(qunatidade);

    for(let i = 0; i < qunatidade; i++){
        maisculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }
    console.log(senhaArray);
}
gerarSenha(10, true);