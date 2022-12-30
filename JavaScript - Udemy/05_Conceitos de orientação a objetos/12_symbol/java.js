class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
    latir(){
        console.log("Au au");
    }
}

Cachorro.prototype.raca = 'SRD';

let patas = Symbol(); // Symbol

Cachorro.prototype[patas] = 4; // Symbol

let labrador = new Cachorro('Labrador', 'Amarelo');

console.log(labrador.patas);

labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);

// Acessando symbol

console.log(Cachorro.prototype[patas]);
console.log(labrador[patas]);