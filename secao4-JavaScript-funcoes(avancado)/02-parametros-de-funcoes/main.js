// toda a palavra funcao tem arguments que eh quem sustenta todos os 
// argumentos enviados

function funcao() {
  // valor inicial em 0
  let total = 0;
  //           funcao q esta de fora
  for (let argumento of arguments) {
  //   0 + (funcao q esta de fora)
    total += argumento;
  }

  console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);