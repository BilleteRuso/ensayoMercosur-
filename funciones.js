function dibujo1 () {
    var elemento1 = document.querySelector('#lienzo1')

    var forma1 = elemento1.getContext('2d')

    forma1.fillRect(20, 13, 80, 80)
    forma1.clearRect(50, 45, 20, 20)
    forma1.strokeRect(120, 13, 80, 80)
}

window.addEventListener("load", dibujo1)

function dibujo2 () {
    var elemento2 = document.querySelector('#lienzo2')

    var forma2 = elemento2.getContext('2d')

    forma2.beginPath()
    forma2.moveTo(20, 20)
    forma2.lineTo(100, 100)
    forma2.lineTo(20, 100)
    forma2.closePath()
    forma2.fillStyle = "#FF0000"
    forma2.fill()
}

window.addEventListener("load", dibujo2)

var item = document.querySelector('#lista')

function guardar () {
    sessionStorage.setItem('apuntes', item.innerHTML)
    alert('Datos guardados');
}
function mostrar () {
    if(sessionStorage.getItem('apuntes')) {
        item.innerHTML = sessionStorage.getItem('apuntes')
    }
}
function borrar () {
    sessionStorage.clear()
    location.reload()
    alert('Datos borrados');
}