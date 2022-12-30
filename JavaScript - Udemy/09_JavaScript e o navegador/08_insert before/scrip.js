let novoElemento = document.createElement("p");

let elementoAlvo = document.querySelector("#titulo-principal");

let texto = document.createTextNode("Algum texto");

novoElemento.appendChild(texto);

let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo);


