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
    if(valor > this.saldo) return;

    this.saldo -= valor;
    this.verSaldo();
};

ContaBancaria.prototype.verSaldo = function() {
    console.log(`R$${this.saldo.toFixed(2)}`);
}

function ContaCorrente(agencia, conta, saldo, limite){
    ContaBancaria.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(ContaBancaria.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)){
        console.log('Saldo insuficiente');
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

const conta2 = new ContaCorrente(112, 999, 0, 100);
console.log(conta2.sacar(110));

function ContaPolpanca(agencia, conta, saldo){
    ContaBancaria.call(this, agencia, conta, saldo);
}

ContaPolpanca.prototype = Object.create(ContaBancaria.prototype);
ContaPolpanca.prototype.constructor = ContaPolpanca;

const conta3 = new ContaPolpanca(10, 2, 200);
console.log(conta3.depositar(100));

