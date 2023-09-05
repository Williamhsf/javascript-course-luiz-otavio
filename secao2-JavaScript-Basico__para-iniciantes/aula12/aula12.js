let varA = 'A';
let varB = 'B';
let varC = 'C';

// para solucionar deve-se criar uma variavel temporaria
const varATemp = varA;
varA = varB
varB = varC
varC = varATemp

// outro modo mais atual de solucionar
[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);

