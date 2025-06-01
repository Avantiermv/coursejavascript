const pessoas = [
    {id: 3, nome: 'Fabio'},
    {id: 2, nome: 'Teresa'},
    {id: 1, nome: 'Marcos'}
];

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
};

console.log(novasPessoas);