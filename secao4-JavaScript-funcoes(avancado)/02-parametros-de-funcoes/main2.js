function funcao(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3);

function funcao2(a, b = 2, c = 4) {
  console.log(a + b + c);
} 

//            so vai assumir o valor de b colocando undefined
//                    o valor c ira receber um novo valor 
funcao2(2, undefined ,20);


