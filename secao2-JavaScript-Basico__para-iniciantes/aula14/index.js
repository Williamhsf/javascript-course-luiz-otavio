let num1 = 10.1032138; // number
let num2 = 2.5; // number

//console.log(num1.toString() + num2); // vai concatenar
//num1 = num1.toString(); // converter number em string
//console.log(typeof num1);

//console.log(num1.toString(2)) // binario
//console.log(num1.toFixed(2)) // arredondar em 2 numeros

console.log(Number.isInteger(num1))  // verificar se é um inteiro

let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); // verificando se NaN é ou não válido

let tempS = num1 * '5';
console.log(Number.isNaN(tempS));