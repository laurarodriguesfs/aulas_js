const navbar = document.querySelector("#navbar")

navbar.innerHTML=`
 <nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="sobre.html">Sobre</a></li>
        <li><a href="contato.html">Contato</a></li>
    </ul>
</nav>`


const mainpainel = document.querySelector("#exibir")
const lista = document.createElement("ul")
const lista_de_frutas = [
    {"nome": "banana","preço": 3.50},
    {"nome": "abacate","preço": 37.50},
    {"nome": "uva","preço": 13},
    {"nome": "maçã","preço": 20}
]

lista_de_frutas.forEach((item) => {
    const listagem = document.createElement("li");
    listagem.classList.add("produto"); // Adiciona a classe

    listagem.innerHTML = `
        Nome do produto: ${item.nome}<br>
        Preço do produto: ${item.preço}
    `;

    lista.appendChild(listagem);
});

mainpainel.appendChild(lista)
//mainpainel.innerHTML=""
