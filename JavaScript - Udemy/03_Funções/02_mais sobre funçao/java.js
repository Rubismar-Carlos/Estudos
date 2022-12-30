function multiplicarTres(a,b,c) {
    return a * b * c
}

console.log (multiplicarTres(2,3,4));

const mult = multiplicarTres(5,4,8);

console.log ("O valor de mult é " + mult);

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log ("Pode dirigir")
    } else {
        console.log ("Não pode dirigir")
    }
}

console.log (podeDirigir (19,true))
console.log (podeDirigir (25,true))
console.log (podeDirigir (40,0))
console.log (podeDirigir (19,1))
console.log (podeDirigir (17,false))