/*
Operadores Lógicos
- && -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
- || -> OR -> OU
- ! -> NOT -> NÃO

&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"
*/
console.log("====== && e || ======")
const num1 = true && true && false && true; //checa toda a expressão se tiver algo diferente ele para
const num2 = true && true && true && true; //checa toda a expressão tendo tudo igual ele continua
const num3 = false || false || false || true; //checa toda a expressão se tiver algo diferente ele inverte o valor


console.log(`A expressão num1 retorna? ${num1}`)
console.log(`A expressão num2 retorna? ${num2}`)
console.log(`A expressão num3 retorna? ${num3}`)

console.log("====== sisteminha (login && senha) ======")
const usuario = 'William';
const senha = 12345;

//                             true                 true
const vaiLogar = usuario === 'William' && senha === 12345;

console.log(vaiLogar)