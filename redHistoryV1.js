var tempo = 2000; // Tempo em milissegundos (2 segundos)
var valorLimite = 89; // Valor limite para colorir

function colorirValoresAcimaDeLimite() {
  var betAmounts = document.getElementsByClassName('bet-amount');

  for (var i = 0; i < betAmounts.length; i++) {
    var betAmount = parseFloat(betAmounts[i].textContent.replace(',', '.'));

    if (betAmount > valorLimite) {
      betAmounts[i].style.backgroundColor = 'green';
    }
  }
}

// Executar a função inicialmente
colorirValoresAcimaDeLimite();

// Executar a função a cada intervalo de tempo definido
setInterval(colorirValoresAcimaDeLimite, tempo);
