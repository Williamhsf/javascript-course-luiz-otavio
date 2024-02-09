function* geradora2() {
  let i = 0;

  while(true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();

console.log(g2.next().value); // gerador infinito, sempre que precisa ele gera mais 1
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);