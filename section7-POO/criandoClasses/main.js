class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome,
        this. sobrenome = sobrenome
    };

    falar(){
        console.log(`${this.nome} está falando`);
    }
};

const pessoa1 = new Pessoa("Marcos", "Vinicius");
console.log(pessoa1.falar());