const app =  document.getElementById("app")
const campo = document.getElementById("numero")
campo.addEventListener("keyup", (event)=>{
    const numero=event.target.value
    do{
        console.log("Número inválido")
    }while(numero <=0)
    while(true){
        if(numero % 2 == 0){
            break
        }
    
        console.log(numero)
        if(numero> 678){
            break
        }
    }
})