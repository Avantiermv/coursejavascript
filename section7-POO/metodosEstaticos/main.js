class ControleRemoto{
    constructor(nomeTv){
        this.nomeTv = nomeTv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    static desligarControle(){
        console.log("Rapaz, deu pra desligar o controle");
    }
}

const controle1 = new ControleRemoto("Samsung");
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);
ControleRemoto.desligarControle();