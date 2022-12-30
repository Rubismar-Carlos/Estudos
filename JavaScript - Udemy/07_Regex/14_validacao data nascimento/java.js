// nos array determino os valores aceitaveis de 0 a 9 e nas chaves a quantidade de numeros que podem ser digitados para a validação

const dataNascimento = /[0-31]{2}[/][0-12]{2}[/][1920-2022]{4}/;

console.log(dataNascimento.test("13/13/1999"));
console.log(dataNascimento.test("13/04/99"));
console.log(dataNascimento.test("2/2/1999"));
console.log(dataNascimento.test("13/04/1999"));
console.log(dataNascimento.test("12/12/1999"));
console.log(dataNascimento.test("13/02/2010"));
