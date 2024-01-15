// desestruturacao
function funcao1({nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade);
}

funcao1({nome: 'William', sobrenome: 'Henrique', idade: 17});

// ou dessa maneira que vai funcionar da mesma maneira
let obj = {nome: 'William', sobrenome: 'Henrique', idade: 17}

function funcao2({nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade);
}

funcao2(obj);

// desestruturacao de arrey
function funcao3([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}

funcao3(['William', 'Henrique', 17]);



