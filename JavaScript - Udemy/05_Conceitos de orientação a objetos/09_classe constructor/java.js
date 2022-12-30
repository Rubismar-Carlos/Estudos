class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let labrador = new Cachorro('Labrador', 4, 'Preto');


console.log(labrador);

class Pessoa{
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

let rubens = new Pessoa("Rubens", 23, "Progamador");

console.log(rubens)