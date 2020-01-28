/*Cálculo de IMC
Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:

const nome = 'Carlos'
const peso = 84
const altura = 1.88
A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal 
definido pela fórmula abaixo:
peso / (altura * altura)
Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

SE o IMC maior ou igual a 30: Carlos você está acima do peso;
SE o IMC menor que 29.9: Carlos você não está acima do peso;*/

const nome = 'Nadja'
const peso = 75
const altura = 1.56
const sexo = 'feminino'

const imc = (peso / (altura * altura)) 

if (!(imc < 29.9) || imc >= 30){
    console.log (`${nome}, ${sexo}. Você está acima do peso segundo o índice IMC: ${imc}`)
} else {
    console.log (`${nome}, ${sexo}. Você não está acima do peso segundo o índice IMC: ${imc}`)
}
    