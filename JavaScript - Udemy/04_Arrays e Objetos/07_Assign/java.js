let carro = {
    portas: 2,
    portamalas: "200L",
    motor: "2,0",
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true,

}


console.log(adicionais);

Object.assign(carro, adicionais); //Assign adiciona 2 lets em uma so

console.log(carro);