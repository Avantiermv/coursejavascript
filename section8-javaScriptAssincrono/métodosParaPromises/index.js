function numRand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject("ERRO AQUI!");
            return;
        } 

        setTimeout(() =>{
        resolve(msg);
    }, tempo);
    })
}

// const promises = [
//     "Primeiro Valor",
//     esperaAi("Promise 1", 2000),
//     esperaAi("Promise 2", 500),
//     esperaAi("Promise 3", 4000),
//     esperaAi(1000, 1000),
//     "Ultimo valor"
// ];

// Promise.all(promises)
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(e => {
//         console.log(e);
//     });

const promises = [
    esperaAi("Promise 1", numRand(1, 5)),
    esperaAi("Promise 2", numRand(1, 5)),
    esperaAi("Promise 3", (1, 5))
];
Promise.race(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(e => {
        console.log(e);
    });
