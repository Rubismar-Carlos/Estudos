function saudacao(nome) {
    if(typeof nome != "string") {
        throw new Error("o parâmetro nome precisa ser string");
    } else {
        console.log(`Olá ${nome}`);
    }
}

saudacao("Rubens");
saudacao(5);

console.log("Teste");