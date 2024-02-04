// Valida qual jogo atual
let gamePath = document.location.pathname;
let bttBody = document.querySelector('.body');
let modalCloseButton

switch (gamePath) {
    // Adicione casos para diferentes caminhos de jogo, se necessário
    case '/pt/games/fortune-double/1':
        alert('Fortune');
        closeRules();
        break;
    case '/pt/games/double':
        alert('DoubleKill');
        break;
    case '/pt/games/crash':
        alert('Crash');
        break;
    // Caso padrão
    default:
        console.log('Caminho do jogo desconhecido');
}

function bttGenerate() {
    let bttON = document.createElement("button");
    bttON.innerHTML = 'Iniciar';
    bttON.addEventListener("click", function() {
        alert("Iniciou");
    });
    // Estilos para destacar o botão 'Iniciar'
    bttON.style.backgroundColor = 'green';
    bttON.style.color = 'white';
    bttON.style.marginBottom = '10px'; // Adiciona espaçamento vertical
    bttBody.appendChild(bttON);

    let bttOFF = document.createElement("button");
    bttOFF.innerHTML = 'Parar';
    bttOFF.addEventListener("click", function() {
        alert("Parou");
    });
    // Estilos para destacar o botão 'Parar'
    bttOFF.style.backgroundColor = 'red';
    bttOFF.style.color = 'white';
    bttOFF.style.marginTop = '10px'; // Adiciona espaçamento vertical
    bttBody.appendChild(bttOFF);
}

//Fecha Janela de Regras
function closeRules() {
    // Localize o elemento pelo ID
    modalCloseButton = document.getElementById('parent-modal-close');

    // Verifique se o elemento existe antes de clicar
    if (modalCloseButton) {
        // Simule um clique no botão para fechar a janela modal
        modalCloseButton.click();
    }
};
