var mult = 99, amount, betAmounts;
// Função para formatar o fundo
function formatBackground() {
    // Seleciona todos os elementos com a classe "bet-amount"
    betAmounts = document.getElementsByClassName('bet-amount');

    // Itera sobre os elementos
    for (var i = 0; i < betAmounts.length; i++) {
        amount = betAmounts[i].textContent.trim(); // Obtém o valor do elemento e remove espaços em branco
        amount = parseInt(amount.replace(/\./g, '').split(',')[0], 10); // Converte a string em um número

        // Verifica se o número é maior que 99
        if (amount >= mult) {
            betAmounts[i].style.backgroundColor = 'red'; // Define o fundo como vermelho
        }
    }
}

// Executa a formatação a cada segundo
setInterval(formatBackground, 1000);
