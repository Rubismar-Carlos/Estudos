let array1 = [1,2,3,4,5,6];
let array2 = [21,22,23]

function verificarElementos (arr) {
    if(arr.length >= 5){
        console.log("Tem muitos elementos")
    } else {
        console.log("Poucos elementos")
    }
}

verificarElementos(array1);
verificarElementos(array2);