//Descobrir se o numero e primo

let num = 10;
let divisoes = 0;

for (let i = 1; i <= num; i++ ) {
    if (num % i == 0) {
        divisoes++
    }
}
 if ( divisoes == 2) {
    console.log (`O número ${num} e primo`)
 } else {
    console.log (`O número ${num} não e primo`)
 }