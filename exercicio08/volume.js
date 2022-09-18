// Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado seu raio e sua altura.

let raio = Number(prompt(" Insira o valor do raio"))

let altura = Number(prompt(" Insira o valor do altura"))

let volume =  3.14159 * Math.pow(raio,2) * altura

alert( " o volume da lata é : " + volume)