const cep = /\d{5}-\d{3}/; // determino a quantidade de numeros que e aceito no primeiro e dpeois do - se for digitados mais ou menos retorna false

console.log(cep.test("88117-500"));
console.log(cep.test("88117-5008"));
console.log(cep.test("asd"));
console.log(cep.test("8817-500"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/; //ele ira passar em forma de telefone,

console.log(tel.test("(62)9999-9999"));