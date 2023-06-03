let mult = 49000;
let betAmounts, history;

function formatBackground() {
  betAmounts = document.getElementsByClassName('bet-amount');
  history = [['Página', 'Multiplicador']];

  let reds = 0;
  Array.from(betAmounts).forEach((element) => {
    const page = document.getElementsByClassName('pagination-custom')[0].textContent.replace('Página ', '');
    let amount = parseInt(element.textContent.trim().replace(/\./g, '').split(',')[0], 10);

    if (amount >= mult) {
      element.style.backgroundColor = 'red';
      history.push([page, amount]);
      reds++;
    }
  });

  if (reds === 0) {
    clickNextPage();
  } else {
    console.table(history);
  }
}

setInterval(formatBackground, 1000);

function clickNextPage() {
  const nextButton = document.getElementsByClassName('pagination__button')[1];
  nextButton.click();
}
