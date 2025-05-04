function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumentoPreço = function(valor){
    this.preco = valor + this.preco;
}

Produto.prototype.diminuirPreço = function(valor){
    this.preco = valor - this.preco;
}

function Camisa(nome, preco, material, cor, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    this.cor = cor;

        Object.defineProperty(this, 'estoque', {
            enumerable: true,
            configurable: false,
            get: function(){
                return estoque;
            },
            set: function(valor){
                if(typeof valor !== 'number') return;
                estoque = valor;
            }
        })
}

function Carro(nome, preco, tipo, cor, quantidadeNaConcessionaria){
    Produto.call(this, nome, preco);
    this.tipo = tipo;
    this.cor = cor;

    Object.defineProperty(this, 'quantidadeNaConcessionaria', {
        enumerable: true,
        configurable: false,
        get: function(){
            return quantidadeNaConcessionaria;
        },
        set: function(quantidade){
            if(typeof quantidade !== 'number') return;
            quantidadeNaConcessionaria = quantidade;
        }
    })
}


Carro.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100));
}
Camisa.prototype = Object.create(Produto.prototype);

const camisa1 = new Camisa("Manga longa", 34, "Algodão", "Azul", 5);
const carro1 = new Carro("Ferrari", 1200400, "Super Esportivo", "Vermelho", 2);
console.log(carro1);
console.log(camisa1);

