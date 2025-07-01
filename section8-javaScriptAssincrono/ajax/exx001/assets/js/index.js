const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method(), obj.url, true);
    xhr.send(); //necessário depois do open

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);
        }else{
            obj.error(xhr.statusText);
        }
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

function carregaPagina(element){
    const href = element.getAttribute('href');
    
    request({
        method: 'GET',
        URL: href,
        success(response){

        },
        error(error){
            console(error);
        }
    })
}