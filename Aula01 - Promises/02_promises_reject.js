function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1,3))
    .then(msg => {
        console.log(msg)
        return esperaAi(11111, rand(1,3))
    })
    .then(msg => {
        console.log(msg)
        return esperaAi('Frase 3', rand(1,3))
    })
    .then(msg => {
        console.log(msg)
    })
    .catch(e => {
        console.log('Erro: ', e)
    });

