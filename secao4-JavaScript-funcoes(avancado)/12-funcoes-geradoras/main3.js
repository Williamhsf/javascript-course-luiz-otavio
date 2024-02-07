// funcao geradora eh um codigo que pode ser pausado
function* geradora1() {
  // Codigo qualquer
  // yield retorna um dos valores
  yield 'valor 1';
  // Codigo qualquer
  yield 'valor 2';
  // Codigo qualquer
  yield 'valor 3';
}

function* geradora2() {
  let i = 0;

  while(true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);