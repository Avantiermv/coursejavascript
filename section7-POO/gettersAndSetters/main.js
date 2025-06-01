const _velocidade = Symbol();
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    };

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor > 340 || valor < 0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        return this[_velocidade];
    }

    acelerar(velocidade){
        if (velocidade >= 340) return;
        this[_velocidade] ++;
    }

    desacelerar(velocidade){
        if(velocidade < 0) return;
        this[_velocidade] --;
    }
}



const regera1 = new Carro('Regera');
for(i = 0; i < 300; i++){
    regera1.acelerar(i);
}

console.log(regera1);