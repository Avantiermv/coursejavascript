const sobremessas = [
    {id: 5, nome: 'Sorvete Azul'},
    {id: 3, nome: 'Bolo Rosa'},
    {id: 1, nome: 'Sonho de Laranja'},
    {id: 2, nome: 'Paffocam'},
    {id: 4, nome: 'Mousse de Cajá'}
]

const mostrarSobremessas = new Map();
for(const sobremessa of sobremessas){
    const { id } = sobremessa;
    mostrarSobremessas.set(id, {...sobremessa});
}

console.log(mostrarSobremessas);