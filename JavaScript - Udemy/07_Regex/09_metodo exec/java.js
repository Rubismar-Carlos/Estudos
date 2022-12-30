const digitos = /\d+/;

console.log(digitos.exec("tem o número 100"));
console.log(digitos.exec("Não tem o número"));

// o metodo exec entrega o console correto em forma de array e  no lugar de false ele entrega o resultado null 