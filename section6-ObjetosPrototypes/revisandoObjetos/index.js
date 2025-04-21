function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa("Marcos", "Vincius");
p1.nome = "Marcos";
console.log(p1);


