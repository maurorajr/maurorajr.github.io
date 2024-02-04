// Variáveis globais
let gamePath = document.location.pathname;
let bttBody = document.querySelector('.body');
let modalCloseButton;
let bttOnOff = '0';
var script = document.createElement('script');
let bttON, bttOFF;

// Função para selecionar o jogo
function selectGame() {
    switch (gamePath) {
        case '/pt/games/fortune-double/1':
            alert('Fortune');
            closeRules();
            break;
        case '/pt/games/double':
            alert('DoubleKill');
            break;
        case '/pt/games/crash':
            bttGenerate();
            //script.src = 'https://maurorajr.github.io/crashBet.js';
            //document.head.appendChild(script);
            break;
        default:
            console.log('Caminho do jogo desconhecido');
    }
}

// Função para gerar botões
function bttGenerate() {
    bttON = createButton('Iniciar', 'green', 'white', '10px', function() {
        alert('Iniciou');
        bttON.disabled = true;
        bttOFF.disabled = false;
    });
    bttBody.appendChild(bttON);

    bttOFF = createButton('Parar', 'red', 'white', '10px', function() {
        alert('Parou');
        bttOFF.disabled = true;
        bttON.disabled = false;
    });
    bttOFF.disabled = true; // Inicia o botão "Parar" como desativado
    bttBody.appendChild(bttOFF);
}

// Função para fechar a janela de regras
function closeRules() {
    modalCloseButton = document.getElementById('parent-modal-close');
    if (modalCloseButton) {
        modalCloseButton.click();
    }
}

// Função auxiliar para criar botões
function createButton(text, bgColor, textColor, margin, clickHandler) {
    let button = document.createElement('button');
    button.innerHTML = text;
    button.style.backgroundColor = bgColor;
    button.style.color = textColor;
    button.style.margin = margin;
    button.addEventListener('click', clickHandler);
    return button;
}

// Chamada da função principal
selectGame();