function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = 'rgba(154, 54, 5, 1)'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = 'rgba(195, 149, 102, 1)'
    } else {
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = 'rgba(7, 88, 182, 1)'
    }
}
