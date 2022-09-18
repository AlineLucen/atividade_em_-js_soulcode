//. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.

let ladoQuadrado = Number (prompt("informe o valor de um lado do quadrado"))
let calcular = Math.pow(ladoQuadrado,2)

alert ("Área do quadrado :" + calcular)

calcular = ladoQuadrado*4

alert("Perimetro do quadrado : "+ calcular)
