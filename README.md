# 🃏 Clash Royale — Sorteador de Cartas

Um sorteador de cartas aleatório do Clash Royale, construído com HTML, CSS e JavaScript puro, consumindo uma API pública com dados oficiais do jogo.

---

## 🖼️ Preview

> Interface temática do Clash Royale com sorteio animado de cartas, exibindo nome, custo de elixir e imagem oficial de cada carta.

---

## 🚀 Como usar

1. Clone ou baixe os arquivos do projeto:
   ```bash
   git clone https://github.com/seu-usuario/clash-royale-sorteador.git
   ```

2. Abra o arquivo `index.html` diretamente no navegador — nenhuma instalação necessária.

3. Clique em **"Sortear Carta"** para descobrir uma carta aleatória!

---

## 📁 Estrutura do Projeto

```
/
├── index.html    # Estrutura da página
├── style.css     # Estilização temática (Clash Royale)
└── script.js     # Lógica de consumo da API e sorteio
```

---

## 🌐 API Utilizada

**RoyaleAPI — CR API Data**

| Campo          | Detalhe                                                              |
|----------------|----------------------------------------------------------------------|
| URL            | `https://royaleapi.github.io/cr-api-data/json/cards.json`           |
| Método         | `GET`                                                                |
| Formato        | `JSON`                                                               |
| Autenticação   | Não necessária                                                       |
| Repositório    | [royaleapi/cr-api-data](https://github.com/royaleapi/cr-api-data)   |

### Exemplo de resposta

```json
[
  {
    "name": "Knight",
    "key": "knight",
    "elixir": 3,
    "type": "Troop"
  }
]
```

### Campos utilizados

| Campo    | Tipo   | Descrição                                      |
|----------|--------|------------------------------------------------|
| `name`   | string | Nome da carta exibido na interface             |
| `key`    | string | Chave usada para montar a URL da imagem        |
| `elixir` | number | Custo de elixir exibido na interface           |

### URL das imagens das cartas

As imagens são carregadas dinamicamente via CDN oficial:

```
https://cdn.royaleapi.com/static/img/cards-150/{key}.png
```

---

## ⚙️ Funcionamento

```
Página carregada
      │
      ▼
carregarCartas()  →  fetch(API_URL)  →  salva array em todasAsCartas[]
      │
      ▼
Usuário clica em "Sortear Carta"
      │
      ▼
sortearCarta()  →  índice aleatório  →  exibe nome, elixir e imagem
```

---

## 🎨 Tecnologias

- **HTML5** — estrutura semântica
- **CSS3** — variáveis CSS, gradientes, animação `float`, Google Fonts (Bangers)
- **JavaScript (ES6+)** — `async/await`, `fetch`, manipulação de DOM

---

## ⚠️ Observações

- A API é hospedada no GitHub Pages e pode ter instabilidade eventual.
- As imagens das cartas dependem do CDN `cdn.royaleapi.com` estar disponível.
- O projeto não possui back-end — todo o processamento ocorre no navegador.

---

## 📄 Licença

Este projeto é de uso livre para fins educacionais. Os dados das cartas e imagens pertencem à **Supercell** e são utilizados de forma não comercial.

> Clash Royale é uma marca registrada da Supercell Oy.
