function loadScripts(scriptUrls, callback) {
  var loadedScripts = 0;

  function loadScript(url) {
    var script = document.createElement('script');
    script.src = url;
    script.onload = function() {
      loadedScripts++;
      if (loadedScripts === scriptUrls.length) {
        callback();
      } else {
        loadScript(scriptUrls[loadedScripts]);
      }
    };
    document.head.appendChild(script);
  }

  loadScript(scriptUrls[0]);
}
/*
// Exemplo de uso:
var scriptUrls = [
  'https://maurorajr.github.io/betHistoryV2.js',
  'https://maurorajr.github.io/betHistoryV2.js'
];

loadScripts(scriptUrls, function() {
  // Todos os scripts foram carregados
  // Aqui você pode chamar as funções ou executar o código necessário após o carregamento dos scripts
});
*/
