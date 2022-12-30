var num = [5, 8, 2, 9, 3]
num.push(1) // Para adcionar o numero 1
num.sort()  // para colcoar minha lista de numeros em ordem crescente
console.log(num) // para aparecer minha lista de numeros 
console.log(`O vetor tem ${num.length} posições`) // para me mostrar a posição do $
console.log(`O primeiro valor do vetor é ${num[0]}`) // para me mostrar a primeira posição 
var pos = num.indexOf(9) // pedi para procurar e me mostrar a posição do numero 9
if (pos == -1) {
    console.log('O valor nao foi encontrado') //caso nao tiver o numero na caixa ira falar que nao foi encontrado
} else {
    console.log(`O valor está na posição ${pos}`) // se estiver na caixa ira me mostrar a posição que ele esta
}