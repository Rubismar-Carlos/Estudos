const frase = "Aqui tem o número 100".match(/\d+/); //vai conferir se na frase tem número e retornar um array como no metodo exec

const frase2 = "Aqui não tem número".match(/\d+/); // vai retornar null porque nao contem numero

console.log(frase);
console.log(frase2);