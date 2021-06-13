let video = document.querySelector('#mivideo') 
let boton_rep = document.querySelector('#repro')

function reproducir(){
    if(video.paused) {
        video.play()
        boton_rep.innerHTML='Pausa'
    } else {
        video.pause()
        boton_rep.innerHTML='Play'
    }
}

function frenar(){
    video.pause()
    video.currentTime=0
    boton_rep.innerHTML='Play'
}

function saltar(fotogramas){
    video.currentTime += fotogramas
}




