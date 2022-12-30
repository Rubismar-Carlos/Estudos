let idade = 18;
let cnh = false;

if (idade >= 18 && cnh == true ) {
    console.log ("Voce possui cnh.")
} else if ( idade >= 18 && cnh == false) {
    console.log (`Voce possui ${idade} é não tem cnh.`)
} else if ( idade < 18){
    console.log (`Voce tem ${idade} anos, ainda não pode tirar cnh.`)
}