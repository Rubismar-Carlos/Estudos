class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set newRua(newRua){
        this.rua = newRua;
    }

    set newBairro(newBairro){
        this.bairro = newBairro
    }

    set newCidade(newCidade) {
        this.cidade = newCidade
    }

    set newEstado(newEstado) {
        this.estado = newEstado
    }

}

let endereco = new Endereco("Rua verdon", "Residencial Campos Eliseos", "Aparecidade de goiania", "Goiás");

console.log(endereco);

endereco.newRua = "Rua inacio";
endereco.newBairro = "Park Solar";
endereco.newCidade = "Goiania";
endereco.newEstado = "Goias";

console.log(endereco);