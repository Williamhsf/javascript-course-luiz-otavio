const numero = Number(prompt("Digite algo"));
const numeroTitulo = document.getElementById('numeroTitulo');

const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan');
const arredondadoCima = document.getElementById('arredondadoCima');
const arredondadoBaixo = document.getElementById('arredondadoBaixo');
const casaDecimal = document.getElementById('casaDecimal');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arrendodando para Cima: ${Math.ceil(numero)}</p>` 
texto.innerHTML += `<p>Arrendodando para Baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`