function detectar(dado) {
    if (typeof dado === 'boolean') {
        console.log("Isso e boolean")
    } else if (typeof dado === 'string') {
        console.log("Isso é uma string")
    } else if (typeof dado === 'number') {
        console.log("Isso é número")
    }
}

detectar(true);
detectar(23);
detectar("Rubens");