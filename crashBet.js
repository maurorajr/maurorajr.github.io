let tBet, nBet, tName, nValue, nVEle, nProfit = 0, nBetP = 0, id = 0, bttOnOff = '';
const bPlaceBet = document.querySelector(".place-bet button");
const aBets = [['Id', 'Status', 'Bet', 'Return', 'LogTime']];

function startBet() {
    bttOnOff = document.querySelector('.startButton').disabled;

    if (bttOnOff) {
        tBet = bPlaceBet.innerText.trim();
        tName = document.querySelector("table .entry .user").innerText.replace('R$ ', '').trim();
        nBetP = document.querySelector("table .entry .bet").innerText.replace('R$ ', '').trim();
        nProfit = document.querySelector("table .entry .profit").innerText.replace('R$ ', '').trim();
        nVEle = document.querySelector(".input-field");

        if (nVEle.value && !isNaN(parseFloat(nVEle.value))) {
            nValue = parseFloat(nVEle.value);

            if (tName.toUpperCase() !== 'CODZER0' && tBet === 'Começar o jogo' && nValue > 0 && nValue <= 25) {
                bPlaceBet.click();
            } else if (tName.toUpperCase() === 'CODZER0' && tBet !== 'Começar o jogo' && nValue >= 0 && nValue <= 25) {
                nBet = parseFloat(bPlaceBet.innerText.replace('Retirar ', '').replace(' BRL', '').trim());

                if (!isNaN(nBet) && nBet / nValue >= nMin && nBet / nValue <= nMax) {
                    bPlaceBet.click();

                    if (!isNaN(nProfit)) {
                        aBets.push([id++, 'Won', nBetP, nProfit, new Date().toLocaleString()]);
                    }
                }
            }
        }

        cleanAll();
    }
}

setInterval(startBet, 1200);

function cleanAll() {
    console.clear();
    console.table(aBets);
}
