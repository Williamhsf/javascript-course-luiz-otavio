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

// usando um for nós iremos iterar o objeto(g1), mostrando 
// todos os valores
const g1 = geradora1();
for(let valor of g1){
  console.log(valor);
}