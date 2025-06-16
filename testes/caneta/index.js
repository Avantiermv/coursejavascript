class Caneta{
    constructor(nome, tamanho, modelo){
        this.nome = nome,
        this.tamanho = tamanho,

        Object.defineProperty(this, 'modelo', {
            enumerable: false,
            writable: false,
            configurable: false,
            value: modelo
        })
    }

    set tamanho(valor){
        if(typeof valor !== 'number'){console.log("Não é número"); return;}; 
        this._tamanho = valor;
        return true;
    }

    get tamanho(){
        return this._tamanho;
    }

    get modelo(){
        return this.modelo;
    }
    
}

const caneta1 = new Caneta("Bic", 1.2, "Azul");
console.log(caneta1);