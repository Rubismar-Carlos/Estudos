function checarTamanhoTexto(texto) {
    if(texto.length > 10) {
        console.log ("Texto muito longo")
    } else {
        console.log ("Texto no limite")
    }
}

checarTamanhoTexto("Ola meu nome e Rubens");
checarTamanhoTexto("Rubens Carlos");
checarTamanhoTexto("Rubens");