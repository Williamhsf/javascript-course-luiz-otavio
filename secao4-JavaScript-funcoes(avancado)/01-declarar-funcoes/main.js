// Declaracao de funcao (funcao hoisting)
function falaOi() {
  console.log('Oie');
}

falaOi();

// first-class objetcts (objetos de primeira classe)
// function expression
const souUmDado = function() {
  console.log('Sou um dado');
}

// executando uma funcao dentro da outra
function executaFuncao(funcao) {
  console.log('vou executar a funcao abaixo...');
  funcao();
}

executaFuncao(souUmDado);

// arrow funtion
const funcaoArrow = () => {
  console.log('sou uma arrow function!!');
}
funcaoArrow();

// dentro de um objeto
const obj = {
  falar(){
    console.log('estou falando....')
  }
};

obj.falar();