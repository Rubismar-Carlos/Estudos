const validarIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIP.test("127.2.3.1"));
console.log(validarIP.test("8.8.8.8"));
console.log(validarIP.test("127.108.3.62"));
console.log(validarIP.test("127.10"));
console.log(validarIP.test("alkhjgdflkhj"));