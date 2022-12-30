const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    },
    multi: function(a,b) {
        return a * b;
    },
    divisao: function(a,b) {
        return a / b;
    }
}

console.log(calculadora.soma(3,2));
console.log(calculadora.subtrair(3,2));
console.log(calculadora.multi(3,2));
console.log(calculadora.divisao(3,2));