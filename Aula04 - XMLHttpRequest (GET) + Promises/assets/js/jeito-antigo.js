const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send(null);

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            obj.sucess(xhr.responseText);
        } else {
            obj.error({
                code: xhr.status,
                msg: xhr.statusText
            });
        }
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

function carregaPagina(element) {
    const href = element.getAttribute('href');
    request({
        method: 'GET',
        url: href,
        sucess(response) {
            carregaResultado(response)
        },
        error(error) {
            console.log("erro: ", error);
        }
    });
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};