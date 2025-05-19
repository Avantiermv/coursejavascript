function ValidarCPF(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo',{
            enumerable: true,
            get: function (){
                return cpfEnviado.replace(/\D+/g, '');
            }
        });
}

ValidarCPF.prototype.validarAqui = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criarDigito(cpfParcial);
    const digito2 = this.criarDigito(cpfParcial + digito1);

    const cpfValidado = cpfParcial + digito1 + digito2;
    return cpfValidado === this.cpfLimpo;
}

ValidarCPF.prototype.criarDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
   
    let regr = cpfArray.length + 1;
    const somaDoCPF = cpfArray.reduce((ac, valor) => {
        ac += (regr * Number(valor));
        regr--;
        return ac;
    }, 0);

    let digito = 11 - (somaDoCPF % 11);
    return digito > 9 ? '0' : String(digito);
    
}

ValidarCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidarCPF('111.111.111-11');
console.log(cpf.validarAqui());
