// funcao geradora eh um codigo que pode ser pausado
function* geradora1() {
  //yield retorna smpre que chamar um next de um objeto que sera retornado, retornara um desses valores
  // Codigo qualquer
  yield 'valor 1';
  // Codigo qualquer
  yield 'valor 2';
  // Codigo qualquer
  yield 'valor 3';
}

const g1 = geradora1();
console.log(g1.next()); // irá acusar que é um objeto gerador
console.log(g1.next().value); // vai cada um dos yield de cada vez
console.log(g1.next().value); // se precisa de um proximo valor é so chamar novamente
console.log(g1.next().value);
console.log(g1.next()); // se chamarmos mais que o total de valores lá dentro ele retorna dizendo que acabou