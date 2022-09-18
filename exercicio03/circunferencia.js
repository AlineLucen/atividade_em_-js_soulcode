//Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

let raio = Number(prompt("informe o valor do raio"))

const vlrPi = 3.14159

raio  = raio ** 2

let calculo = vlrPi * raio

alert ("Valor da Área : "+ calculo)

calculo= 2 * vlrPi * raio

alert( "Valor do perimetro : "+ calculo)


