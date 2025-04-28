function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const Pessoa1 = new Pessoa("Marcos", "Vinicius");
//console.log(Pessoa1);

const copiarObjeto1 = {
    ...Pessoa1,
    idade: 19
}
copiarObjeto1.nome = "Rapaz";
//console.log(copiarObjeto1);

const copiarObjeto2 = Object.assign({}, Pessoa1);
console.log(copiarObjeto2);