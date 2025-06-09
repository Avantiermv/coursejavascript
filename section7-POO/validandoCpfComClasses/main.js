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


    valida(){
        if(!this.cpflimpo) return false;
        if(typeof this.cpflimpo !== 'string') return false;
        if(this.cpflimpo.length !== 11) return false;
        if(this.eSequencia()) return false;

        return 'To aqui';
    }

}

const cpf1 = new ValidandoCpf('111.111.111-11');
console.log(cpf1.valida());