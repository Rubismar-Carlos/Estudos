
try {
    let a =  b + 2;
} catch (error) {
    console.log(error);
} finally {
    console.log("Executou ")
}


// o finally executa o codigo mesmo se o erro dentro do try catch acontecer