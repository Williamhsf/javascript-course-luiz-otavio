/*
 * Primitivos (imutáveis) - string, number, boolean
 * undefined, null (bigint, symbol) - valor
 * AQUI NO CASO SÓ CONSIGO COPIAR PRA DENTRO DA VARIÁVEL
*/ 
console.log("==============Referencia (imutável)==================")
//! trocando valor da variável
let nome = 'William';
nome = 'Henrique';

console.log(nome);

// =======================================
console.log("==============Referencia (mutável)===================")
/*
 * Referencia (mutável) - array, object, function
*/ 
console.log("==============Usando Array===========================")
//* array
let a = [1, 2, 3];
let b = a;
console.log(a,b)

//! adcionar um
a.push(4);
console.log(a,b)

//? tirar um
a.pop();
console.log(a,b)

console.log("==============Usando Objeto==========================")
//* objeto
const d = {
  nomeD: 'Luiz',
  sobrenomeD: 'Henrique'
};

//! posso alterar sem prejudicar a const de cima
const e = {...d};

d.nomeD = 'Jorge';
console.log(d);
console.log(e);
