class Mamifero {
    constructor(patas, cor) {
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Cachorro extends Mamifero {
    constructor(patas, raca, cor) {
        super(patas, patas); // Para herda de mamifero tem que tem o super
        this.cor = cor;
        this.raca = raca;
    }

    latira() {
        console.log("Au Au")
    }
}

let pug = new Cachorro (4, "Pug", "Amarelo");

console.log(pug);

console.log(pug.patas);

console.log(new Cachorro instanceof Mamifero); // Para saber se cachorro e a instancia de mamifero 

// para descobrir quem e o pai do objeto para nao se perde no codigo futuramente