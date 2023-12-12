let numeroSecreto = parseInt(Math.random() * 100);

let numeroEntrada= document.getElementById("numeroEntrada")

let mensaje= document.getElementById("mensaje")
let intento= document.getElementById("intento")
let intentos= 0

function chequearResultado(){
    intentos++
    intento.innerHTML= "Intentos: " + intentos
    let numero = parseInt(numeroEntrada.value)

    // Solo tienes como maximo 10 intentos

    if (intentos > 10){
        mensaje.innerHTML= "Has perdido, el numero secreto era: " + numeroSecreto
        return        
    }

    if(numero < 0 || numero > 100){
        mensaje.innerHTML= "El número debe estar entre 0 y 100"
        mensaje.style.color= "black"
        return
    }

    if(numero == numeroSecreto){
        mensaje.innerHTML= "¡Adivinaste!"
        mensaje.style.color= "green"
        numeroEntrada.disabled= true
    } else if(numero > numeroSecreto){
        mensaje.innerHTML= "El número secreto es menor"
        mensaje.style.color= "red"
    } else if(numero < numeroSecreto){
        mensaje.innerHTML= "El número secreto es mayor"
        mensaje.style.color= "red"
    }
}