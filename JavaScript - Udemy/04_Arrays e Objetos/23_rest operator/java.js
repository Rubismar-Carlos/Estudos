let num = 1;
let num1 = 2;
let num2 = 3;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++)
    console.log(args[i]);
}

imprimirNumeros(num,num1,num2);
console.log("Stop")
imprimirNumeros(num2,num);
console.log("Stop");
imprimirNumeros(2,3,5,76,257,26,21);

//Todos os numeros dentro da function seram impressos como array
