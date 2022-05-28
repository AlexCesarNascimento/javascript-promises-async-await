const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send(null);

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject( { code: xhr.status, msg: xhr.statusText } );
            }
        });
    });
    
};

document.addEventListener('click', event=> {
    const element = event.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault(); // evita de quando eu clicar no link ele ir para outra página
        carregaPagina(element);
    }
})

async function carregaPagina(element) {
    const href = element.getAttribute('href');
    try {
        const response = await request({
            method: 'GET',
            url: href
        });
        carregaResultado(response);
    } catch (erro){
        console.log("Error: ", erro)
    }
};

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};