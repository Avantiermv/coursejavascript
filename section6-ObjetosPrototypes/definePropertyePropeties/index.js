function Produto(nome, preço, estoque){
    this.nome = nome;
    this.preço = preço; 

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable:false
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable:false
        },

        preço: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable:false
        }
    })
}

const produto1 = new Produto("Revista", 10, 4);
for(let chave in produto1){
    console.log(valor);
}