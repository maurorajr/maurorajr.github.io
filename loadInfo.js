var bet = 1000, amount,
    pOne = 0, pTwo = 0, mult = 19, trace = 0, safe = 1.5, betVlr = 1, qtdPag = 150, time = 1500;
let page = 0;
let aMedia = [['Distância', 'Núm. Ocorrências']];
const hist = document.getElementsByClassName('fairness-modal-link')[1];

function formatBackground() {
    betAmounts = document.getElementsByClassName('bet-amount')
    for (var i = 0; i < betAmounts.length; i++) {
        //amount = parseFloat(betAmounts[i].textContent.trim().replace(',', '.'));

        amount = betAmounts[i].textContent.trim(); // Obtém o valor do elemento e remove espaços em branco
        amount = parseInt(amount.replace(/\./g, '').split(',')[0], 10); // Converte a string em um número

        if (amount > mult) {
            betAmounts[i].style.backgroundColor = 'red';
            if (pTwo > 0) {
                updateNumberArray(pTwo, aMedia)
            }
            pOne = isNaN(pOne) ? 0 : pTwo > pOne ? pTwo : pOne;
            pTwo = 0;
            trace++;
        } else {
            if (pTwo >= 0 || pOne >= 0) {
                pTwo++;
            }
        }
    }
    let lin = 1;

    const info = [
        ['Mult.', 'Total Rodadas', 'Valor Ref. Fixa', 'Total Rodadas >= ' + mult.toString(), '$ Entrada', 'Maior Seq < ' + mult.toString()]
    ];
    const tabela = [['Linha', 'Gasto/Linha', 'Retorno Ref. Fixa']];

    const valorRefFixa = (bet / (pOne * safe)).toFixed(2);
    const possivelLucro = ((bet / (pOne * safe)) * mult).toFixed(2); //REVISAR ESTE CÁLCULO POIS NÃO SERÁ ÚTIL #ID 0001
    const percentualTrace = ((trace / (page * 300)) * 100).toFixed(2);

    info.push([
        mult,
        `${page * 300} (Pag. ${page}/${qtdPag})`,
        `$ ${valorRefFixa} (Remover!!!! Possível Lucro: $${possivelLucro})`, //REVISAR ESTE CÁLCULO POIS NÃO SERÁ ÚTIL #ID 0001
        `${trace.toString()} (${percentualTrace}%)`,
        bet,
        `${pOne} (${(pOne / 11).toFixed(2)} Linha(s))`
    ]);

    for (let index = 0; index < Math.round((pOne * safe) / 11); index++) {
        const gastoLinha = betVlr * 11;
        const retornoRefFixa = (betVlr * mult) + '$';

        tabela.push([lin++, gastoLinha, retornoRefFixa]);

        console.clear();
        console.table(info);
        console.table(tabela.slice(-10));
        console.table(aMedia.slice(-10));
    }
}

function clickNextPage() {
    formatBackground();
    if (page === 0) {
        hist.click();
        page++;
    } else if (page < qtdPag) {
        const next = document.getElementsByClassName('pagination__button')[1];
        next.click();
        page++;
    } else if (page >= qtdPag) {
        const close = document.getElementsByClassName('fa fa-close')[0];
        close.click();
    }
}

function updateNumberArray(number, array) {
    const index = array.findIndex(([num]) => num === number);

    if (index !== -1) {
        array[index][1]++;
    } else {
        array.push([number, 1]);
    }

    array.sort((a, b) => a[0] - b[0]); // Ordena o array com base na primeira coluna (números)
    //array.sort((a, b) => b[1] - a[1]); // Ordena o array por número de ocorrências

}

//Clean/Show Tables
function cleanAll() {
    console.clear();
    console.table(info);
    console.table(tabela);
};

setTimeout(function () {
    clickNextPage();
    setInterval(clickNextPage, time); // Executa a cada 5 segundos após o primeiro clique
}, time); // Inicia a primeira chamada após 5 segundos
