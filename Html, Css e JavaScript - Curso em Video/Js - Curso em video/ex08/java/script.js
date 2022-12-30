function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    }
    else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero = ''
        var img = window.document.createElement('img') // criando um elemento img
        img.setAttribute('id', 'foto') // criando uma id para a img 
        res.innerHTML = `Sua idade é ${idade}`
        if (fsex[0].checked) {
            gênero ='Homem'
            if (idade >= 0  && idade < 10) {
                //Criança
                img.setAttribute('src', 'criança-m.png')
            }
            else if (idade < 21 ){
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        }
        else if (fsex[1].checked) { 
            gênero = 'Mulher'
            if (idade >= 0  && idade < 10) {
                //Criança
                img.setAttribute('src', 'criança-f.png')
            }
            else if (idade < 21 ){
                //Jovem
                img.setAttribute('src', 'adulta-f.png')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulta-f.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'idosa-f.png')
            }
                
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // para adicionar a imagem ao site
    } 
}