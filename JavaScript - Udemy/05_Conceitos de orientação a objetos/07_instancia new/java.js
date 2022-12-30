function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("Auuuuuuu");
    }
}

let husky = new Cachorro('Husky',4 ,'Preto');

husky.uivar();

console.log(husky);

let pastor = new Cachorro('Pastor alemão', 4, 'Branco');

pastor.uivar();
console.log(pastor);