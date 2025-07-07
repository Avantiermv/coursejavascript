document.addEventListener('click', e => {
    const element = e.target;
    const tag = element.tagName.toLowerCase(); 

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(element);
    }
});

function carregaPagina(element){
    const href = element.getAttribute('href');
    fetch(href).then(response => response.text()).then(html => carregaResultado(html)).catch((e) => console.log("AHHHHHHHHHHHHHHHH"));
    carregaResultado(response);
}    

function carregaResultado(html){
    const resultado = document.querySelector('.result');
    resultado.innerHTML = html;
}

