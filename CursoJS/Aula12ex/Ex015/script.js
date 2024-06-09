function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'meninoBebe.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemHomem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homemAdulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'homemIdoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'meninaBebe.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemMulher.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulherAdulta.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'mulherIdosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}