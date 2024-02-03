const html = document.querySelector('html');
const focoBt = document.querySelector('button.app__card-button--foco');
const curtoBt = document.querySelector('button.app__card-button--curto');
const longoBt = document.querySelector('button.app__card-button--longo');
const banner = document.querySelector('img.app__image');
const titulo = document.querySelector('h1.app__title');
const botoes = document.querySelectorAll('button.app__card-button');
const startPauseBt = document.querySelector('button#start-pause');
const musicaFocoInput = document.querySelector('input#alternar-musica');
// objeto audio
const musica = new Audio('sons/luna-rise-part-one.mp3');
const audioFinalizado = new Audio('sons/beep.mp3');
const audioIniciado = new Audio('sons/play.wav');
const audioPausa = new Audio('sons/pause.mp3');


let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

focoBt.addEventListener('click', () => {
    alterarContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', function () {
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});

function alterarContexto(contexto) {
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active');
    });
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;

        case "descanso-curto": 
            titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta! </strong>`;    
            break;
        
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
        
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        audioFinalizado.play();
        alert("Tempo finalizado!");
        zerar();
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    console.log(`Temporizador: ${tempoDecorridoEmSegundos}`);
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId){
        audioPausa.play();
        zerar();
        return;
    }
    audioIniciado.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
    clearInterval(intervaloId);
    intervaloId = null;
}