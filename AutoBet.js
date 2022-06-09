let interval, tRollingTime = 1250, n = 1, nMin = 0, posARolls = 0, tWheel = '', tWheelPx = 'Px', tWheelProx = 'Prox', nWheelMark = 0, tRet = '', tGambler = ''
    , aGambler = [], aRollsItems = [], aRollComp = [], aTotBets = [], aRollsDice = [];

aRollsItems = [['Id', 'Result', 'Pixel', 'Apostador', 'Total Bet CT', 'Total Bet D', 'Total Bet TR', 'DateTime-Log']];
aGambler = [['Lvl', 'Nome', 'Valor']];
aTotBets = [['CT Bet', 'D Bet', 'TR Bet']];


function newInterval(intervalTime) {
    clearInterval(interval);
    interval = setInterval(function () {
        setTimeout(function () {
            tWheelPx = document.getElementsByClassName('wheel')[0].style.backgroundPosition;
            if (tWheelPx != '600px center') {
                if (parImp(n) == false) {
                    aRollComp[1] = tWheelPx;
                } else {
                    aRollComp[2] = tWheelPx;
                }
                if (aRollComp[1] === aRollComp[2]) {
                    DiceTrCt(aRollComp[2]);
                    getGambler();
                    aRollsItems.push([n, tRet, parseFloat(tWheelPx), tGambler, Date().replace(' GMT-0300 (Horário Padrão de Brasília)', '')]);
                    aRollComp[1] = 'empty1', aRollComp[1] = 'empty2';
                }
            }
            if (tWheelPx === '600px center') {
                delDup();
            }
            cleanAll();
            nWheelMark = nWheelMark + 1;
            n = n + 1;
        }, tRollingTime);
    }, intervalTime);
};
newInterval(tRollingTime);

function cleanAll() {
    console.clear();
    console.table(aRollsItems);
    //plan100(aRollsItems);
};

function parImp(nNum) {
    if (nNum % 2 == 0) {
        return true;
    } else {
        return false;
    }
};

function DiceTrCt(tWheel) {
    tWheel = parseFloat(tWheel);
    switch (true) {
        case ((tWheel <= 649 && tWheel >= 551) || (tWheel <= 2149 && tWheel >= 2051)):
            tRet = 'D'
            return tRet;
            break;
        case ((tWheel <= 749 && tWheel >= 651) || (tWheel <= 949 && tWheel >= 851) || (tWheel <= 1149 && tWheel >= 1051) || (tWheel <= 1349 && tWheel >= 1251) || (tWheel <= 1549 && tWheel >= 1451)
            || (tWheel <= 1749 && tWheel >= 1651) || (tWheel <= 1949 && tWheel >= 1851) || (tWheel <= 2249 && tWheel >= 2151) || (tWheel <= 2449 && tWheel >= 2351) || (tWheel <= 2649 && tWheel >= 2551)
            || (tWheel <= 2849 && tWheel >= 2751) || (tWheel <= 3049 && tWheel >= 2951) || (tWheel <= 3249 && tWheel >= 3151) || (tWheel <= 3449 && tWheel >= 3351)):
            tRet = 'TR'
            return tRet;
            break;
        case ((tWheel <= 849 && tWheel >= 751) || (tWheel <= 1049 && tWheel >= 951) || (tWheel <= 1249 && tWheel >= 1151) || (tWheel <= 1449 && tWheel >= 1351) || (tWheel <= 1649 && tWheel >= 1551)
            || (tWheel <= 1849 && tWheel >= 1751) || (tWheel <= 2049 && tWheel >= 1951) || (tWheel <= 2349 && tWheel >= 2251) || (tWheel <= 2549 && tWheel >= 2451) || (tWheel <= 2749 && tWheel >= 2651)
            || (tWheel <= 2949 && tWheel >= 2851) || (tWheel <= 3149 && tWheel >= 3051) || (tWheel <= 3349 && tWheel >= 3251) || (tWheel <= 3549 && tWheel >= 3451)):
            tRet = 'CT'
            return tRet;
            break;
        default:
            break;
    }
};

function delDup() {
    for (let index = 1; index < aRollsItems.length; index++) {
        if (aRollsItems[index][0] - aRollsItems[index - 1][0] === 1) {
            aRollsItems.splice(index, 1);
        }
    }
};

function plan100(aPln) {

    time = h + '-' + m + '-' + s + '_report'
    let csvContent = "data:text/csv;charset=utf-8," + aPln.map(e => e.join(",")).join("\n");
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");

    link.setAttribute("href", encodedUri);
    link.setAttribute("download", time + ".csv");
    document.body.appendChild(link); // Required for FF
    link.click(); // This will download the data file named "my_data.csv".

};

function getGambler() {

    switch (tRet) {
        case 'CT':
            tGambler = 'Lvl: ' + document.getElementsByClassName('bets-container--open')[0].getElementsByClassName('bet py-1')[0].innerText.replace('\n', ' | Nick: ').replace('\n', ' | Vlr: ').replace('\n', '');
            return tGambler;
            break;
        case 'D':
            tGambler = 'Lvl: ' + document.getElementsByClassName('bets-container--open')[1].getElementsByClassName('bet py-1')[0].innerText.replace('\n', ' | Nick: ').replace('\n', ' | Vlr: ').replace('\n', '');
            return tGambler;
            break;
        case 'TR':
            tGambler = 'Lvl: ' + document.getElementsByClassName('bets-container--open')[2].getElementsByClassName('bet py-1')[0].innerText.replace('\n', ' | Nick: ').replace('\n', ' | Vlr: ').replace('\n', '');
            return tGambler;
            break;
        default:
            break;
    }
};

function getTBets() {
    let CTBet = '', DBet = '', TRBet = '';

    CTBet = document.getElementsByClassName('h-40')[2].innerText.replace('\n', ' | ');
    DBet = document.getElementsByClassName('h-40')[3].innerText.replace('\n', ' | ');
    TRBet = document.getElementsByClassName('h-40')[4].innerText.replace('\n', ' | ');

    aTotBets.push([CTBet, DBet, TRBet]);
    return aTotBets;
};
