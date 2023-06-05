let betArray = [['Bet', 'Pag', 'Multiplicador', 'Retorno Calculado']];
let multi = 999, settime = 1500, filtro = 9999, betPlace = 0.1;

parametro();

function processBets() {
    const betElements = document.getElementsByClassName('bet');
    const betTimes = document.querySelectorAll('#history .bet');
    const serverTime = new Date(); // Get current server time

    for (let i = 0; i < betElements.length; i++) {
        const betElement = betElements[i];
        const betTime = betTimes[i].querySelector('p').textContent;
        const betAmountElement = betElement.querySelector('.bet-amount');
        const page = document.getElementsByClassName('pagination-custom')[0].textContent.replace('Página ', '').replace(' de 339', '');

        if (betAmountElement !== null) {
            const betAmount = parseInt(betAmountElement.textContent.trim().replace(/\./g, '').split(',')[0], 10);

            if (betAmount > multi && !betArray.some(item => item[1] === betAmount)) {
                betElement.style.backgroundColor = 'red';
                betArray.push([i, page, betAmount, 'R$ ' + (betAmount * betPlace).toFixed(2), betTime]);
                //betArray.push([page, betAmount, serverTime]); // Add page, betAmount, and serverTime to the array
            }
        }
    }

    console.clear();
    console.table(betArray);
    console.table(betArray.filter(item => item[2] > filtro));
    setTimeout(() => {
        const paginationButtons = document.getElementsByClassName('pagination__button');
        if (paginationButtons.length > 1) {
            paginationButtons[1].click();
        }
    }, settime);
}

setInterval(processBets, settime);

function parametro() {
    betArray = [['Bet', 'Pag', 'Multiplicador', 'Retorno Calculado', 'Data']];
    multi = parseInt(prompt('Informe o multiplicador.'));
    filtro = parseInt(prompt('Informe o filtro.'));
    settime = parseInt(prompt('Velocidade paginação(1 - Rápida | 2 - Normal | 3 - Lenta).'));
    switch (settime) {
        case 1:
            settime = 1200;
            break;
        case 2:
            settime = 2000;
            break;
        case 3:
            settime = 5000;
            break;
        default:
            break;
    }
}
