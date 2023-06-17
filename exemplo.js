function ola (){
    alert ("ola, seja bem vindo ao vanippa js")
}
 function somar (){
    let numero1 = Number (document.querySelector("#numero1").value)
    let numero2 = Number (document.querySelector("#numero2").value)
   document.querySelector("#resultado").value = numero1+numero2
}
function subtrair (){
    let numero1 = Number (document.querySelector("#numero1").value)
    let numero2 =Number (document.querySelector("#numero2").value)
   document.querySelector("#resultado").value = numero1-numero2
}
function dividir (){
    let numero1 = Number (document.querySelector("#numero1").value)
    let numero2 = Number (document.querySelector("#numero2").value)
   document.querySelector("#resultado").value = numero1/numero2
}
function multiplicar (){
    let numero1 = Number (document.querySelector("#numero1").value)
    let numero2 =Number (document.querySelector("#numero2").value)
   document.querySelector("#resultado").value = numero1 * numero2
}
