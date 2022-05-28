//Async Await

function rand(min=0, max=3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

esperaAi('Fase 1 ', rand())
    .then(valor => {
        let a = rand() 
        console.log(valor + `(${a})`)
        return esperaAi('Fase 2 ', a)
    })
    .then(fase => {
        a = rand() 
        console.log(fase + `(${a})`)
        return esperaAi('Fase 3 ', a)
    })
    .then(fase => {
        console.log(fase + `(${a})`)
        return fase
    })
    .then(fase => {
        console.log('Terminamos na fase: ' + fase)
    })
    .catch(e => console.log(e))