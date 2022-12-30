const umOUMaisNumeros = /\d+/; // so vai aceitar numeros e nao letras

console.log(umOUMaisNumeros.test("1234"));
console.log(umOUMaisNumeros.test(""));
console.log(umOUMaisNumeros.test("addfsfd"));