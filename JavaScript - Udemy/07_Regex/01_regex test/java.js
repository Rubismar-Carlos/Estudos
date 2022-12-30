const reg1 = new RegExp('bola');

console.log(reg1.test("tem bola ?"));
console.log(reg1.test("Não tem"));

const reg2 = /bola/;

let text = 'tem bola na cesta';

console.log(reg2.test("tem bola ?"));
console.log(reg2.test("Não tem"));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado?"));
console.log(/quadrado/.test("32453243243quadrado32432432432"));


// com o regex ele vai verificar se em alguma string contem a palavra, ele encontra a palavra mesmo ela estando embaralhado em outras palavras

// se retornar true e porque tem se não e false