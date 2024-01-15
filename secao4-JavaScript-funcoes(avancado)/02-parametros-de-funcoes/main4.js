//                                     rest operator(pega o que sobra)
function conta(operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros);

  for(let numero of numeros) {
    // -todos os numeros somados
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '*') acumulador *= numero;
    if (operador === '/') acumulador /= numero;

  }

  console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);