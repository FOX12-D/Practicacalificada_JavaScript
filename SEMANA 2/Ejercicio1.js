/*
1 .- Cálculo de Índice de Masa Corporal (IMC):
Escribe un programa que pregunte al usuario su peso en kilogramos y su altura en metros. Calcula el Índice de Masa Corporal (IMC) usando la fórmula IMC = peso / (altura * altura) y muestra la categoría correspondiente según el IMC (bajo peso, normal, sobrepeso, obesidad). (10 p)
*/

//ingreso de datos al usuario
let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
let altura = parseFloat(prompt("Ingresa tu altura en metros:"));

// Calcular IMC
let imc = peso / (altura * altura);

let categoria = "";
// se evalua segun el imc
if (imc < 18.5) {
    categoria = "Peso insuficiente";
} else if (imc >= 18.5 && imc <= 24.9) {
    categoria = "Peso normal o saludable";
} else if (imc >= 25.0 && imc <= 29.9) {
    categoria = "Sobrepeso";
} else {
    categoria = "Obesidad";
}


alert("Tu IMC es: " + Math.round(imc) + "\nCategoría: " + categoria);