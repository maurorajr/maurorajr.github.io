// Variáveis globais
let gamePath = document.location.pathname;
let bttBody = document.querySelector('.body');
let modalCloseButton;
var script = document.createElement('script');
let bttON, bttOFF;

// Função para selecionar o jogo
function selectGame() {
    switch (gamePath) {
        case '/pt/games/fortune-double/1':
            closeRules();
            bttGenerate();            
            break;
        case '/pt/games/double':
            bttGenerate();
            break;
        case '/pt/games/crash':
            bttGenerate();
            script.src = 'https://maurorajr.github.io/crashBet.js';
            document.head.appendChild(script);
            break;
        default:
            console.log('Caminho do jogo desconhecido');
    }
}

// Função para gerar botões
function bttGenerate() {
    bttON = createButton('Iniciar', 'green', 'white', '10px', 'startButton', function() {
        //alert('Iniciou');
        bttON.disabled = true;
        bttOFF.disabled = false;
    });
    bttBody.appendChild(bttON);

    bttOFF = createButton('Parar', 'red', 'white', '10px', 'stopButton', function() {
        //alert('Parou');
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
function createButton(text, bgColor, textColor, margin, additionalClass, clickHandler) {
    let button = document.createElement('button');
    button.innerHTML = text;
    button.style.backgroundColor = bgColor;
    button.style.color = textColor;
    button.style.margin = margin;
    button.classList.add(additionalClass); // Adiciona a classe adicional
    button.addEventListener('click', clickHandler);
    return button;
}

function topControl() {
    // Get the parent element to append the new elements
const regularBettingController = document.querySelector('.scrollable');

// Create a div to contain the inputs and button
const containerDiv = document.createElement('div');

// Create a label for the numeric input
const label = document.createElement('label');
label.textContent = 'Valor:';

// Create the first numeric input field
const numericInput1 = document.createElement('input');
numericInput1.type = 'number';
numericInput1.color = 'white';
numericInput1.className = 'inputMin';
numericInput1.value = 'XXX';
numericInput1.disabled = true; // Start disabled    

// Set the 'for' attribute of the label to match the input's id
const inputId = 'numericInput1'; // You can use any unique identifier
label.setAttribute('for', inputId);

// Adicionar label e inputMin à div
containerDiv.appendChild(label);
containerDiv.appendChild(numericInput1);

// Append the container div and the "Editar" button to the parent element
regularBettingController.appendChild(containerDiv);
regularBettingController.insertAdjacentElement('afterbegin', numericInput1);
regularBettingController.insertAdjacentElement('afterbegin', label);

}

// Chamada da função principal
selectGame();
