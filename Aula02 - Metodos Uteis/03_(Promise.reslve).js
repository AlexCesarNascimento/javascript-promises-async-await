// Promise.all
// Promise.race
// Promise.resolve 
// Promise.reject

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

function baixaPagina() {
    const emCache = true;
    if(emCache) {
        // return Promise.resolve('Pagina em cache');
        return Promise.reject('Pagina em cache');
        
    } else {
        return esperaAi('Pagina em cache', 3000);
    }
}
baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log("Erro: ", e));