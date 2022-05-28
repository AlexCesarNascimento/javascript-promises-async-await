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
        if(typeof msg !== 'string') {
            reject('CAI NO ERRO');
            return;
        }
        setTimeout(()=>{
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

const promises = [
    esperaAi('Promise 1', rand(1,3)),
    esperaAi('Promise 2', rand(1,3)),
    esperaAi('Promise 3', rand(1,3)),
];
// Olha todas as promessas e entrega a mais rapida
Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });