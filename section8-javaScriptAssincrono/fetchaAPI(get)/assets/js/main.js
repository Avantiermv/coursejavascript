const request = obj => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send(); //necessário depois do open

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else{
                reject(xhr.statusText);
            }
        });
    })
};

document.addEventListener('click', e => {
    const element = e.target;
    const tag = element.tagName.toLowerCase(); 

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(element);
    }
});

async function carregaPagina(element){
    const href = element.getAttribute('href');
    
    const objConfig = {
        method: 'GET',
        url: href 
    };
    
    try{
        const response = await request(objConfig);
        carregaResultado(response);
    }catch(e){
        console.log(e);
    }
}    

function carregaResultado(response){
    const resultado = document.querySelector('.result');
    resultado.innerHTML = response;
}