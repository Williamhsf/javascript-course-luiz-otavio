/*
AVALIAÇÃO DE CURTO CIRCUITO (encurta as posibilidades de aumentar o codigo tornando ele mais performatico)

SÃO RETORNADOS COMO FALSOS:
FALSY
false
' " " ' ` ` string vazia
null / undefined
NaN
*/

console.log("====complementando o uso de true e false====");
const vaiExecutar = true;

function falarOi() {
  return "oi";
}
console.log( `Sendo true ele retorna, caso contrario nada retornaria`)
console.log(vaiExecutar && falarOi())

// || or -> vai retornar o valor verdadeiro, pq depende apenas que um seja verdsdeiro
console.log("=============== || ===============")
//          false  false  false      true      não vai ser nais checado
console.log(0 || false || null || 'william' || true)

console.log("=============== mais um or - || ===============")
const corUsuario = 'preto';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);