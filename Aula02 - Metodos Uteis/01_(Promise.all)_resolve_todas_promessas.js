// Promise.all
// Promise.race
// Promise.resolve 
// Promise.reject
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });