/*
 * Aritméticos
 * + Adição / Concatenação
 * - subtração / divisão * mulplicação
 * ** potenciação
 * % resto da divisão
 * 
 * ++ incremento
 * -- descremento
 * 
 *   
*/

const num1 = 5;
const num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log(num1 ** num2);
console.log(num1 % num2);

console.log((num1 + num2) * num2);

// ? incremento
let contador1 = 1;
contador1++;
console.log(contador1);

// ! decremento
let contador2 = 2;
contador2--;
console.log(contador2);


// parseInt NaN -> Not a number
const num3 = 10;
const num4 = parseInt('5.2'); // conversão
const num5 = parseFloat('6.2');
const num6 = Number('6.2');
const num7 = Number('William');
console.log(num3 + num4)
console.log(num3 + num5)
console.log(num3 + num7)
console.log(typeof num6)
console.log(typeof num7)