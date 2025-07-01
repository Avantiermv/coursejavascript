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


async function executar(){
    try{
        const fase1 = await esperaAi("Message 1", numRand());
        console.log(fase1);

        const fase2 = await esperaAi(2, numRand());
        console.log(fase2);

        const fase3 = await esperaAi("Message 3", numRand());
        console.log(fase3);

        console.log("Fases terminadas");
    }catch(e){
        console.log(e);
    }
}
    

//Essa função, que usa async/await faz o seguinte, ele executa a função e a cada await ele pausa resolve ou rejeita a promise.

executar();
    