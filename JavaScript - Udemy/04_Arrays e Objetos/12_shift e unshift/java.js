let frutas = ["Maça", "Uva", "Melão"];

let frutaRemovida = frutas.shift(); // remove o primeiro objeto no caso "maça"
console.log(frutaRemovida);
console.log(frutas);

frutas.unshift("Perâ"); // adiciona no primeiro objeto 

console.log(frutas);
console.log(frutas[0]);