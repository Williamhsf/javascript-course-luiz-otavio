// capiturando evento submit do formulario
const form = document.querySelector('#form');

//capturando calculo imc
form.addEventListener('submit', function(e) {
  e.preventDefault(); // garante que nda será enviado

  
  //e.target -> de onde estou selecionando
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  //definir o tipo de entrada de dados Number
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // sinalizar caso contrario o tipo de valor false
  if(!peso) {
    setResultado('Peso Inválido', false);
    return;
  }

  if(!altura) {
    setResultado('Altura Inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
})

// pegando por uma tabela os niveis de peso
function getNivelImc (imc) {
  //array de niveis de peso
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  //ifs caso a pessoa atinja algum desses pesos
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];

}

// função que calcula IMC
function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

//function criar paragrafos
function criarP () {
  //adicionar um paragrafo dentro da tag resultado
  const p = document.createElement('p');
  return p;
}

//criar uma função para enviar uma msg
function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');

  resultado.innerHTML = ''; //limpar primeira sessao
  const p = criarP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  //a partir daqui o paragrafo será criado
  p.innerHTML = msg;
  resultado.appendChild(p);
}