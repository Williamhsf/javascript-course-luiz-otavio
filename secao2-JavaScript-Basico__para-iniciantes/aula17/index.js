function saudacao(nome){
  //? console.log(`oi ${nome}`);  verificando se está tudo direitinho
  return`oi ${nome}`;
};

const variavel = saudacao('Luiz');
console.log(variavel)

//? ======================================================
//* somando 
function soma1(x,y) {
  const resultado = x + y;
  return resultado;
}

const resultado = soma1(4,2);
console.log(resultado);

//! ======================================================
function soma2(x = 1, y = 1) {
  const resultado2 = x + y;
  return resultado2;
}

const resultado2 = soma2(5,2)
console.log(resultado2);


// ======================================================
//* raiz quadrada
const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));

//! usando ARROW FUNCTION
//* raiz quadrada com arrow function
const raizz = n => n ** 0.5;
console.log(raizz(16));