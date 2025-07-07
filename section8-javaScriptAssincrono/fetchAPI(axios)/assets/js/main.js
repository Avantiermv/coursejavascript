axios('./assets/json/pessoas.json').then(response => loadElementsInPage(response.data));

function loadElementsInPage(json){
    const divResult = document.querySelector('.result');
    const table = document.createElement('table');

    divResult.appendChild(table);

    divResult.appendChild(table);
    for(let pessoa of json){
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.salario;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.cpf;
        tr.appendChild(td3);
       
        table.appendChild(tr)
    }

}