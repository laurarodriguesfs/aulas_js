//const app =  document.querySelector("#app")
const app =  document.getElementById("app")
const nomes = ["maria", "joão", "pedro", "augusto"]
const idades= [12,22,21,43,56,78,43,23]
const ul = document.createElement("ul")

const tamanho = nomes.length-1
//tem;con;incremento
/*for(let i=0; i <= tamanho; i++){
    //criação de uma tag html
    const lista = document.createElement("li")
    lista.innerText= nomes[i]
    ul.appendChild(lista)
}

for(const pos in nomes){
    const lista = document.createElement("li")
    lista.innerText= nomes[pos]
    ul.appendChild(lista)
}
*/

/*for(const idade of idades){

    if (idade>99){
        break
    }    
    if (idade % 2 == 0){
        continue
    } 
    const lista = document.createElement("li")
    lista.innerText= idade
    ul.appendChild(lista)

}

/*  if (idade>35){
        break
    }
for:

    Itera sobre um contador e uma condição, controlando explicitamente o início, a condição de término e o incremento do contador.
    Ideal quando se conhece a quantidade de iterações ou quando se precisa manipular o contador de forma flexível. 

for...in:

    Itera sobre as chaves (propriedades enumeráveis) de um objeto. 

Não itera sobre os valores, mas sim sobre os nomes das propriedades. 
Útil quando se precisa acessar os nomes das propriedades de um objeto. 

for...of:

    Itera sobre os valores de um objeto iterável, como arrays ou strings.
    Não itera sobre chaves ou índices, mas sim sobre os elementos do objeto iterável.
    Ideal para percorrer listas de valores sem precisar acessar o índice*/


app.appendChild(ul)