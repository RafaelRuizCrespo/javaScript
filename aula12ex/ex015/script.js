function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var tipo = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 13) {
                tipo = 'criança'
            } else if (idade < 18) {
                tipo = 'adolecente'
            } else if (idade < 65) {
                tipo = 'adulto'
            } else {
                tipo = 'idoso'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                tipo = 'criança'
            } else if (idade < 18) {
                tipo = 'adolecente'
            } else if (idade < 65) {
                tipo = 'adulta'
            } else {
                tipo = 'idosa'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} ${tipo} com ${idade} anos.`
    }
}