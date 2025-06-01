class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){console.log(`${this.nome} já está ligado`); return}
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){console.log(`${this.nome} já está desligado`); return}
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, modelo, ano, marca){
        super(nome);
        this.modelo = modelo;
        this.ano = ano;
        this.marca = marca;
    }
}

const celular1 = new Smartphone("S29", "Galaxy", 2013, "Samsung");
celular1.desligar();