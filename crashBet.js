let tBet, nBet, tName, nValue, nVEle, nMin = 2, nMax = 50000, nProfit = 0, nBetP = 0, id = 0, bttOnOff = '', betInpOff = '';
const bPlaceBet = document.querySelector(".place-bet button");
//const aBets = [['Id', 'Status', 'Bet', 'Return', 'LogTime']];

minMaxGen();

function startBet() {
    bttOnOff = document.querySelector('.startButton').disabled;

    if (bttOnOff) {
        betInpOff = document.querySelector('.input-field-wrapper .input-field')
        betInpOff.disable = false
        tBet = bPlaceBet.innerText.trim();
        tName = document.querySelector("table .entry .user").innerText.replace('R$ ', '').trim();
        nBetP = document.querySelector("table .entry .bet").innerText.replace('R$ ', '').trim();
        nProfit = document.querySelector("table .entry .profit").innerText.replace('R$ ', '').trim();
        nVEle = document.querySelector(".input-field");
        nMin = parseFloat(document.querySelector('.inputMin').value)
        nMax = parseFloat(document.querySelector('.inputMax').value)

        if (nVEle.value && !isNaN(parseFloat(nVEle.value))) {
            nValue = parseFloat(nVEle.value);

            if (tName.toUpperCase() !== 'CODZER0' && tBet === 'Começar o jogo' && nValue > 0 && nValue <= 25) {
                bPlaceBet.click();
            } else if (tName.toUpperCase() === 'CODZER0' && tBet !== 'Começar o jogo' && nValue >= 0 && nValue <= 25) {
                nBet = parseFloat(bPlaceBet.innerText.replace('Retirar ', '').replace(' BRL', '').trim());

                if (!isNaN(nBet) && nBet / nValue >= nMin && nBet / nValue <= nMax) {
                    bPlaceBet.click();                    
                }
            }
        }

        cleanAll();
    }
}

setInterval(startBet, 1200);

function cleanAll() {
    console.clear();
}

function minMaxGen() {
    // Get the parent element to append the new elements
    const regularBettingController = document.querySelector('.regular-betting-controller');
    
    // Create a div to contain the inputs and button
    const containerDiv = document.createElement('div');
    
    // Create the first numeric input field
    const numericInput1 = document.createElement('input');
    numericInput1.type = 'number';
    numericInput1.className = 'inputMin';
    numericInput1.value = '2';
    numericInput1.disabled = true; // Start disabled
    
    // Criar botão para subtrair -5
    const subtractButton = document.createElement('button');
    subtractButton.textContent = '-5';
    subtractButton.addEventListener('click', function() {
        const currentValue = parseFloat(numericInput1.value);
        numericInput1.value = (currentValue - 5).toFixed(2);
    });

    // Criar botão para somar +5
    const addButton = document.createElement('button');
    addButton.textContent = '+5';
    addButton.addEventListener('click', function() {
        const currentValue = parseFloat(numericInput1.value);
        numericInput1.value = (currentValue + 5).toFixed(2);
    });

    // Adicionar inputMin à div
    containerDiv.appendChild(subtractButton);
    containerDiv.appendChild(numericInput1);
    containerDiv.appendChild(addButton);
    
    // Create the second numeric input field
    const numericInput2 = document.createElement('input');
    numericInput2.type = 'number';
    numericInput2.className = 'inputMax';
    numericInput2.value = '50000';
    numericInput2.disabled = true; // Start disabled

    // Create the "Editar" button
    const editarButton = document.createElement('button');
    editarButton.className = 'editButton';
    editarButton.textContent = 'Editar';
    
    // Append the inputs to the container div
    containerDiv.appendChild(numericInput2);
    
    // Append the container div and the "Editar" button to the parent element
    regularBettingController.appendChild(containerDiv);
    regularBettingController.appendChild(editarButton);
    
    // Add event listener to the "Editar" button to enable editing
    editarButton.addEventListener('click', function() {
        numericInput1.disabled = !numericInput1.disabled;
        numericInput2.disabled = !numericInput2.disabled;
    });
}
