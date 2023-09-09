function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

// setInterval vai configurar o intervalo de tempo para que alguma funcao seja executada em algum momento
const timer = setInterval(function() {
  console.log(mostraHora());
}, 1000);

// essa funcao executa so uma vez, serve para parar o intervalo
setTimeout(function() {
  clearInterval(timer); // vai parar setInterval em 10 segundos
}, 10000)

//mais uma vez agora adicionando um texto
setTimeout(function() {
  console.log('ola mundo!!');
}, 5000);