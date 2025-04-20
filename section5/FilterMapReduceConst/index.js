const numeros = [2, 23, 32, 90, 80, 10, 4, 8, 20];

const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((ac, valor) => ac + valor);

console.log(numerosPares);