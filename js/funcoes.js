const formulario = document.querySelector("#form-calc")
const camporesultado = document.querySelector("#resultado")
const botaolimpar = document.querySelector("#limpar")
const btnMultiplicar= document.querySelector("#multiplicar")
const btnSubtrair = document.querySelector("#subtrair")
const btnSomar = document.querySelector("#somar")
const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const nomedigitado = document.getElementById("nome")
nomedigitado.addEventListener("blur", (e)=>{
    saldacao(e.target.value)
})

formulario.addEventListener("click", (e)=>{
    e.preventDefault();
})
/*Callback: função que é executada quando um evento acontece, passa outra função como argumento
addEventListener(,())
Somar(5,6,exibir)
*/

//Função callback
btnSomar.addEventListener("click", ()=>{ 
    somar(Number(numero1.value),Number(numero2.value),resultado)
})

const subtrair =(n1,n2) => camporesultado.innerHTML=n1-n2;

botaolimpar.addEventListener("click", (e)=>{
    limpar()
})

btnMultiplicar.addEventListener("click", (e)=>{
    multiplicar(numero1.value,numero2.value)

})

btnSomar.addEventListener("click", (e)=>{
    somar(numero1.value,numero2.value)

})
btnSubtrair.addEventListener("click", (e)=>{
    subtrair(numero1.value,numero2.value)
})

/*Função sem parâmetros e sem retorno
function limpar(){
    camporesultado.innerHTML=''
}*/

//Função com parâmetros e sem retorno
function somar(n1,n2){
    camporesultado.innerHTML=Number(n1) + Number(n2);;
}

//Função com parâmetros e sem retorno
function somar(n1,n2){
    camporesultado.innerHTML=Number(n1) + Number(n2);;
}
//Função com parâmetros e sem retorno
function multiplicar(n1,n2){
    camporesultado.innerHTML=n1*n2;
}

//Função com parâmetros e com retorno
function resultado(result){
    return
}


/*Hoisting: Comportamento de JavaScript que permite a execução de funções e a utilização de variáveis antes da sua declaração.

soma(6,4)

function soma(num1,num2) {
return num1+num2
}

Funções recursivas: funções que chamam a si mesmas.
São análogas ao loop, ou seja, executam o mesmo código diversas vezes.
Ambas exigem uma condição para controlar e vitar loop infinito ou recursão infinita.
Em termos de performance a recursividade é mais interessante por demandar menos linhas de código.

function loop(x){
    console.log(x)
    if (x>- 10){
        return;
    }

    loop(x+1);
}
loop(0)
 
Clousures(Enclausurar)
Ter uma função dentro de outra função.
Muito usado na orientação a objetos, os atributos são funções enclausuradas dentro de um objeto.
*/

function saldacao(nome){
const tipo = "Sr(a)"

    function formatar(nome,horario){
        camporesultado.innerHTML=`Olá ${tipo} ${nome}`
    }
    formatar(nome, tipo)
}