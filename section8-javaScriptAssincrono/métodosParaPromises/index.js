function numRand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== String) reject("ERRO AQUI VIU?");

        setTimeout(() =>{
        resolve(msg);
    }, tempo);
    })
}
