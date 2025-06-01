const falar = {
    falar(){
        console.log(`${this.nome} está falando`);
    },
};

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`);
    },
}

const comer = {
    comer(){
        console.log(`${this.nome} está comendo`);
    },
}

function pessoa(nome, sobrenome){
    const pessoaPrototype = Object.assign({}, falar, beber, comer);
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const pessoa1 = pessoa("Marcos", "Vinicius");
console.log(pessoa1);