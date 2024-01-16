function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento != null && elemento.localName === 'audio') {
        // console.log(elemento.localName === 'audio');
        elemento.currentTime = 0;
        elemento.play();
    }

    else {
        // alert('Elemento não encontrado!');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}


const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for(let contador = 0; contador < listaDeTeclas.length; contador ++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    //console.log(contador);
    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        // console.log(evento.code);

        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');

        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

