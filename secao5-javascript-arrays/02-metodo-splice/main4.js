// //               -5       -4       -3         -2        -1
// //                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// push
// pegou o ultimo indice (5), não removeu (0), e add 3 nomes
// nomes.splice(   5,      0, 'Luiz', 'Otávio', 'miranda');
nomes.splice(nomes.length, 0, 'Luiz', 'Otávio', 'miranda');
console.log(nomes);