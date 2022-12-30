function contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){ 
        window.alert('[ERRO] Esta faltando dados')
        res.innerHTML = 'Impossivel Contar!'
    }   else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F499}`
            }
        } else {
            //Contagem regressiva 
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c}  \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}