function Produto(nome, preço){
    this.nome = nome;
    this.preço = preço;
}

Produto.prototype.desconto = function(percentual){
   return this.preço = (this.preço - (this.preço * percentual / 100));
}

Produto.prototype.aumento = function(percentual){
    return this.preço = (this.preço + (this.preço * percentual / 100));
 }
 
const produto1 = new Produto("Carro", 10);
produto1.desconto(10);
console.log(produto1);