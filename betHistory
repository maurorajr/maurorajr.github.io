const betArray = [['Bet','Pag','Multiplicador', 'Retorno Calculado']];
let multi = 999, settime = 1500, filtro = 9999, betPlace = 0.1;

function processBets() {
    const betElements = document.getElementsByClassName('bet');
    const serverTime = new Date(); // Get current server time

    for (let i = 0; i < betElements.length; i++) {
        const betElement = betElements[i];
        const betAmountElement = betElement.querySelector('.bet-amount');
        const page = document.getElementsByClassName('pagination-custom')[0].textContent.replace('Página ', '').replace(' de 339', '');

        if (betAmountElement !== null) {
            const betAmount = parseInt(betAmountElement.textContent.trim().replace(/\./g, '').split(',')[0], 10);

            if (betAmount > multi && !betArray.some(item => item[1] === betAmount)) {
                betElement.style.backgroundColor = 'red';
                betArray.push([i, page, betAmount, 'R$ '+(betAmount * betPlace).toFixed(2)]);
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
