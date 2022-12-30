const dia = /\d\d/; //vai retornar true onde a duas caracteres numericas.

console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("asd1"));

const palavrasPeloMenosTresLetras = /\w\w\w/; //vai retornar quando tiver 3 letras ou mais

console.log(palavrasPeloMenosTresLetras.test("asd"));
console.log(palavrasPeloMenosTresLetras.test("asdf"));
console.log(palavrasPeloMenosTresLetras.test("as"));