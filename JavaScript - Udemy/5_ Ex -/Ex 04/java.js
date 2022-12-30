class Carro {
    constructor(marca, cor, gasolina, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
        this.consumo = consumo;
    }

    dirigir(km) {
        let litrosConsumidos = km / this.consumo;
        this.gasolina -= litrosConsumidos;
    }

    abastacer(l) {
        this.gasolina += l;
    }
}

let carro = new Carro("VW", "Cinza", 100, 14);

console.log(carro);

carro.dirigir(200);

console.log(carro);

carro.abastacer(10);

console.log(carro);