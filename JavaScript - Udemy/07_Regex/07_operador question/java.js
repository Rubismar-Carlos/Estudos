const padrao = /Abacax?i/; // o ? aceita qualquer letra no lugar do x ou ate a falta dele

console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));

const padrao2 = /\d+\w?/; // aceita numeros e letras

console.log(padrao2.test("123"));
console.log(padrao2.test("123a"));