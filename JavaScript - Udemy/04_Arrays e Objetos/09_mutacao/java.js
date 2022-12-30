let pessoa = {
    nome: "Rubens"
}

let pessoa3 = {
    nome: "Rubens"
}

let pessoa2 = pessoa; // clonando a variavel

console.log(pessoa == pessoa2);
console.log(pessoa == pessoa3)

pessoa2.nome = "Joao";

console.log(pessoa2);