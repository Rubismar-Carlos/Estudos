function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function(){
    console.log("Auuuuu");
}

Cachorro.prototype.latir = function(){
    console.log("Au Au");
}

let husky = new Cachorro('Husky',4 ,'Preto');

console.log(husky);

husky.uivar();
husky.latir();

let pastor = new Cachorro('Pastor alemão', 4, 'Branco');

console.log(pastor);

pastor.uivar();
pastor.latir();

