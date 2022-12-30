// o regex com letra maiuscula sao negação

const pontoRegex = /./; // o regex ponto aceita toda as caracteres: numeros, textos, espaços.

console.log(".")
console.log(pontoRegex.test("asd")); //vai retornar true
console.log(pontoRegex.test(" ")); // vai retornar true
console.log(pontoRegex.test("123")); // vai retornar true
console.log(pontoRegex.test("123asdf")); // vai retornar true

const dRegex = /\d/; // o regex d so aceita parametos com numeros.

console.log("d")
console.log(dRegex.test("asd")); //vai retornar false
console.log(dRegex.test(" ")); // false
console.log(dRegex.test("123")); // true
console.log(dRegex.test("123asdf")); //true

const dRegex2 = /\D/ // o regex D aceita paramestros que contem letras e nao aceitas numeros.

console.log("D")
console.log(dRegex2.test("asd")); // true
console.log(dRegex2.test(" ")); // true
console.log(dRegex2.test("123")); // false
console.log(dRegex2.test("123asdf")); //true

const sRegex = /\s/ // ele aceita espaços vazios, quebreas de linha ou tabs

console.log("s")
console.log(sRegex.test("asd")); // false
console.log(sRegex.test(" ")); // true
console.log(sRegex.test("123")); // false
console.log(sRegex.test("123asdf")); // false

const wRegex = /\w/ // ele aceita numeros e letras mas não aceita espaços vazios

console.log("w")
console.log(wRegex.test("asd")); // true
console.log(wRegex.test(" ")); // false
console.log(wRegex.test("123")); // true
console.log(wRegex.test("123asdf")); // true