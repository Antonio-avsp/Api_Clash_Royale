
const API_URL = 'https://royaleapi.github.io/cr-api-data/json/cards.json';
let todasAsCartas = [];


async function carregarCartas() {
    try {
        const resposta = await fetch(API_URL);
        todasAsCartas = await resposta.json();
        console.log("Cartas carregadas com sucesso!");
    } catch (erro) {
        console.error("Erro ao conectar com a API:", erro);
        document.getElementById('card-name').innerText = "Erro na Arena";
    }
}

async function sortearCarta() {
    if (todasAsCartas.length === 0) {
        alert("Aguarde o carregamento das cartas...");
        return;
    }

    const loader = document.getElementById('loader');
    const imgElement = document.getElementById('card-img');
    

    const indiceAleatorio = Math.floor(Math.random() * todasAsCartas.length);
    const cartaSorteada = todasAsCartas[indiceAleatorio];


    document.getElementById('card-name').innerText = cartaSorteada.name;
    document.getElementById('card-elixir').innerText = "ELIXIR: " + (cartaSorteada.elixir || "?");
    

    imgElement.src = `https://cdn.royaleapi.com/static/img/cards-150/${cartaSorteada.key}.png`;
    imgElement.style.display = "block";
    
    console.log("Sorteada:", cartaSorteada.name);
}


carregarCartas();