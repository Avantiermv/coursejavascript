function ContaBancaria(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

ContaBancaria.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();

};

ContaBancaria.prototype.sacar = function(valor) {
    console.log(this.saldo);
    if(valor > this.saldo) return;

    this.saldo -= valor;
};

ContaBancaria.prototype.verSaldo = function() {
    console.log();
}