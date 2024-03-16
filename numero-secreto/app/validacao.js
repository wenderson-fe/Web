function verificaChute(chute) {
    const numero = +chute; // Trasnformando em inteiro

    if(chute === 'game over') {
        saindoDoJogo();
    }

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if(numeroMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `
            <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
            `;
        return;
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h1>Você Acertou!</h1>
            <h2>O número secreto era ${numeroSecreto}</h2>

            <button id= "jogar-novamente" class= "btn-jogar">Jogar Novamente</button>
        `;
    }

    if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div> 
        `;
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div> 
        `;
    }
}

function saindoDoJogo() {
    document.body.innerHTML = `
        <h1>Jogo Finalizado</h1><br>
        <button id= "jogar-novamente" class= "btn-jogar">Jogar Novamente</button>
    `;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}


document.body.addEventListener("click", e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})