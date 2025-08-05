import ValidandoCpf from "./validandoCPF";

export default class GeraCPF{
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max-min) + min));
    }

    geraNovoCPF(){
        const cpfsemdigito = this.rand();
        const digito1 = ValidandoCpf.gerarDigito(cpfsemdigito);
        const digito2 = ValidandoCpf.gerarDigito(cpfsemdigito + digito1);
        const novoCPF = cpfsemdigito + digito1 + digito2;
        return novoCPF;
    }
}