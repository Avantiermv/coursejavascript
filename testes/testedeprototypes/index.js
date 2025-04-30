function Funcionario(nome, sobrenome, idade, cargo, salario){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cargo = cargo;
    this.salario = salario;
}

const cargo1 = "Estagiario";
const cargo2 = "Auxiliar";
const cargo3 = "Dev junior";

Funcionario.prototype.falarNome = function(){
    return this.nome + ' ' + this.sobrenome;
}

Funcionario.prototype.aumentarSalario = function(cargo, idade, aumento){
    if(cargo === cargo2 && idade > 18){
        return this.salario = this.salario + (this.salario * aumento/100); 
    }else{
        console.log("Você não tem direito ao aumento!")
    }
}

const funcionario1 = new Funcionario("Marcos", "Vinicius", 19, cargo1, 900);
const funcionario2 = new Funcionario("João", "Paulo" ,48, cargo2, 1234);
console.log(funcionario1.falarNome());
console.log(funcionario1.aumentarSalario(cargo1, 19, 10));
console.log(funcionario2.falarNome());
console.log(funcionario2.aumentarSalario(cargo2, 48, 20));