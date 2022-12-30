function criarCachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("Au Au");
    }
    return cachorro;
}

let doberman = criarCachorro('Doberman', 4, 'amarelo');

console.log(doberman);
doberman.latir();

let pastorAlemao = criarCachorro('Pastor Alemão', 4 ,'preto');

console.log(pastorAlemao);
pastorAlemao.latir();