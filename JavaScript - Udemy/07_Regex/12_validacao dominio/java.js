const validacaoDominio = /[?www.]\w+\.com.br|.com/;

console.log(validacaoDominio.test("www.google.com"));
console.log(validacaoDominio.test("www.ola"));
console.log(validacaoDominio.test("www.google.com.br"));
console.log(validacaoDominio.test("google.com"))