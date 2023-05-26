// Crie um elemento <script>
var script = document.createElement('script');

// Defina o código JavaScript que você deseja adicionar
var code = `
  // Seu código JavaScript aqui
`;

// Atribua o código ao elemento <script>
script.textContent = code;

// Adicione o elemento <script> ao final do elemento <body> ou <head> do documento
document.body.appendChild(script);
