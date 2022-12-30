function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    

    var hora = data.getHours()
    if (hora >= 0 && hora <= 12) {
        img.src = './img/dia.png'
        document.body.style.background = 'yellow'
        msg.innerHTML = `Bom Dia agora sao ${hora} horas.`
    }
    else if (hora >= 12 && hora <= 18){
        img.src = './img/tarde.png'
        document.body.style.background = 'red'
        msg.innerHTML = `Boa Tarde agora sao ${hora} horas.`
    }
    else {
        img.src = './img/noite.png'
        document.body.style.background = 'gray'
        msg.innerHTML = `Boa Noite agora sao ${hora} horas.`
    }
}