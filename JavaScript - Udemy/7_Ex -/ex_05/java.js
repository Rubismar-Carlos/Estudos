const validarNome = /^(?=.{3,16}$)[a-z0-9_]/;

console.log(validarNome.test("rubens_123"));

console.log(validarNome.test("rt"));
console.log(validarNome.test("432432999999999999999999999"));