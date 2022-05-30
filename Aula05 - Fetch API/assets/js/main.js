document.addEventListener('click', event=> {
    const element = event.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault(); // evita de quando eu clicar no link ele ir para outra página
        carregaPagina(element);
    }
});

async function carregaPagina(element) {
    try {
        const href = element.getAttribute('href');
        const response = await fetch(href);
        console.log(response)
    
        if (response.status !== 200) throw new Error('ERRO 404');
        
        const html = await response.text();
        carregaResultado(html);
    } catch (erro) {
        console.log("Error: ", erro)
    }
};

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};

