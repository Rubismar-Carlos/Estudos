var idade = 2
console.log(`Voce tem ${idade} anos.`)
if (idade < 16) {
    console.log('Nao vota')
}

else if (idade < 18 || idade > 65){
    console.log('Voto Opicional')
}
else {
    console.log('Voto obrigatorio')
}

