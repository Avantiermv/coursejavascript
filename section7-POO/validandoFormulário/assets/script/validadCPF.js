class ValidandoCpf{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpflimpo', {
            enumerable: false,
            writable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    eSequencia(){
        return this.cpflimpo.charAt(0).repeat(11) === this.cpflimpo;
    }

    gerarNovoCPF(){
        const cpfSemDigitos = this.cpflimpo.slice(0, -2);
        const digito1 = ValidandoCpf.gerarDigito(cpfSemDigitos);
        const digito2 = ValidandoCpf.gerarDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    static gerarDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let numS of cpfSemDigitos){
            total += reverso * Number(numS);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }


    valida(){
        if(!this.cpflimpo) return false;
        if(typeof this.cpflimpo !== 'string') return false;
        if(this.cpflimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.gerarNovoCPF();
        console.log(this.novoCpf);

        return this.novoCpf === this.cpflimpo;
    }

}

// const cpf1 = new ValidandoCpf('626.633.413-55');

// if(cpf1.valida()){
//     console.log("CPF validado");
// }else{
//     console.log("CPF invalido");
// }