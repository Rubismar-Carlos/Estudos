const reg =/\w+: (Rubens|Joao|Maria)/;

// vai dar true quando retornar um nome que esteja dentro da variavel

console.log(reg.test("Nome: Rubens"));
console.log(reg.test("Nome: Jose"));