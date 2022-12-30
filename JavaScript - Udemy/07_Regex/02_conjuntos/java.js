const reg1 = /[12345]/;

console.log(reg1.test("temos o número 6"));
console.log(reg1.test("temos o número 2"));
console.log(reg1.test("temos o número 23"));
console.log(reg1.test("temos o número 60"));

const reg2 = /[0-9]/;

console.log(reg2.test("Temos o número 50"));
console.log(reg2.test("Temos o número"));


// ele vai reconhecer qualquer numero que esteja dentro do array mas se colocar o 6 como ele nao esta dentro do array vai retornar false porem se colocar 23 ou 60 vai retornar verdadeiro pq ele vai levar em consideração o valor de 12.345 mil mas o 6 não ira encontrar porque nao temos nenhum numero 6 para dar inicio.