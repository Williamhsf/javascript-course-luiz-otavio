const numero = 102;

// if - Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
// else - se não faça isso {o código}
// manter sempre a qualidade do código, tomando cuidado para não por uma condição desnecessária no meio if
// para fazer uma possivel CHECAGEM é bom criar um bloco antes para atrapalhar o fluxo do sistema

if (numero >= 0 && numero <= 5) {
  console.log(`O numero está entre 0 e 5 - e o numero é ${numero}`);
} else if (numero >= 6 && numero <= 8) {
  console.log(`O numero está entre 6 e 8 - e o numero é ${numero}`);
} else if (numero >= 9 && numero <= 11) {
  console.log(`O numero está entre 9 e 11 - e o numero é ${numero}`);
} else {
  console.log(`Este numero não pertence a base de dados - digite de 0 - 11.`);
}