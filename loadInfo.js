var bet = 1000, amount,
    pOne = 0, pTwo = 0, mult = 19, trace = 0, safe = 1.5, betVlr = 1, qtdPag = 150, time = 1500;
let page = 0;
let aMedia = [['Distância', 'Núm. Ocorrências']];
const hist = document.getElementsByClassName('fairness-modal-link')[1];
const info = [
  ['Mult.', 'Total Rodadas', 'Valor Ref. Fixa', 'Total Rodadas >= ' + mult.toString(), '$ Entrada', 'Maior Seq < ' + mult.toString()]
];
const tabela = [['Linha', 'Gasto/Linha', 'Retorno Ref. Fixa']];

function formatBackground() {
  var betAmounts = document.getElementsByClassName('bet-amount');
  for (var i = 0; i < betAmounts.length; i++) {
    amount = betAmounts[i].textContent.trim();
    amount = parseInt(amount.replace(/\./g, '').split(',')[0], 10);

    if (amount > mult) {
      betAmounts[i].classList.add('red-background');
      if (pTwo > 0) {
        updateNumberArray(pTwo, aMedia);
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

  const valorRefFixa = (bet / (pOne * safe)).toFixed(2);
  const possivelLucro = ((bet / (pOne * safe)) * mult).toFixed(2);
  const percentualTrace = ((trace / (page * 300)) * 100).toFixed(2);

  info.push([
    mult,
    `${page * 300} (Pag. ${page}/${qtdPag})`,
    `$ ${valorRefFixa} (Remover!!!! Possível Lucro: $${possivelLucro})`,
    `${trace.toString()} (${percentualTrace}%)`,
    bet,
    `${pOne} (${(pOne / 11).toFixed(2)} Linha(s))`
  ]);

  for (let index = 0; index < Math.round((pOne * safe) / 11); index++) {
    const gastoLinha = betVlr * 11;
    const retornoRefFixa = (betVlr * mult) + '$';

    tabela.push([lin++, gastoLinha, retornoRefFixa]);

    exibirMensagem('');
    exibirTabela(info);
    exibirTabela(tabela.slice(-10));
    exibirTabela(aMedia.slice(-10));
  }
}

function clickNextPage() {
  formatBackground();
  if (page === 0) {
    hist.click();
    page++;
  } else if (page < qtdPag) {
    const next = document.getElementsByClassName('pagination__button')[1
