/* EXERCÍCIO 1 DE INTERPRETAÇÃO
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

RESPOSTA = O código define o valor como 0
e pega todos os numeros menores que 5 até o 0
e depois soma eles. O console vai dar 10 */



/* EXERCÍCIO 2 DE INTERPRETAÇÃO
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

RESPOSTA = O console vai mostrar apenas os números maiores
que 18. O for of é suficiente, era só remover o a linha do
"if (numero > 18) {}". */



/* EXERCÍCIO 3 DE INTERPRETAÇÃO
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

REPOSTA = Sinceramente não consegui entender esse código sem executar ele. */





const pets = Number(prompt("Quantos Bichinhos tu tem?"))

if (pets === 0) {
  console.log("Ai tadinho dele gente. Vai adotar um gato ou um cachorro aí meu chapa.")
}

if (pets > 0) {
  prompt("Diz o nome dele(s) aí")
}