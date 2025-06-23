function numRand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== String) reject("HAAAAAAA");

        setTimeout(() =>{
        resolve(msg);
    }, tempo);
    })
}

esperaAi("Frase 1", numRand(1, 3)).then(response => {
    console.log(response);
    return esperaAi("Frase 2", numRand(1,3));
}).then(response => {
    console.log(response);
    return esperaAi(3333, numRand(1,3));
}).then(response => {
    console.log(response);
}).then(() => {
    console.log("RAOASODF")
}).catch(e => {
    console.log("Rapaz, ele tá sem zap!", e)
});