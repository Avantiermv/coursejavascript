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
    
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criarDigito(cpfParcial);
    const digito2 = '';

    return true;
}

ValidarCPF.prototype.criarDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    console.log(cpfArray);
}

const cpf = new ValidarCPF('705.484.450-52');
console.log(cpf.validarAqui());
