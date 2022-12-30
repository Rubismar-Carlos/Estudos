let frase = "Testando o metodo split";

let corrigindoFrase = frase.split(" ");

let novaFrase = corrigindoFrase.join("@");

console.log (corrigindoFrase);

console.log(novaFrase);

 // o Join e diferente do split no caso ele junta toda a frase e adiciona no lugar o que escrevemos dentro das strings EX: corrigindoFrase.join("@") ele fica todo junto e onde havia espaço vai ter um @.