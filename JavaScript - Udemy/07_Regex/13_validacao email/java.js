const validacaoDominio = /\w+@\w+\.\w+/;

console.log(validacaoDominio.test("rubens@hotmail.com"));
console.log(validacaoDominio.test("rubens@gmail"));
console.log(validacaoDominio.test("gmail.com"));