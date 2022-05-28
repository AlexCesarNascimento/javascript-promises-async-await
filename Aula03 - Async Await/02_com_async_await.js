/**
 *             Async e Await
 * 
 * Promises possuem 3 estados:
 *  Pendente:   Quando a promise está sendo executada
 *  Resolvida:  Quando a promise foi resolvida
 *  Rejeitada:  Quando a promise foi rejeitada
 */

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

async function executa(){
    try {
        const fase1 = await esperaAi('Fase 1 ', rand());
        console.log(fase1);
        const fase2 = await esperaAi(2, rand());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3 ', rand());
        console.log(fase3);
    
        console.log('Terminamos na fase: ' + fase3)
    } catch(e) {
        console.log(e);
    }
}


executa();
