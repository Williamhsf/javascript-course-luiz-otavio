// //               -5       -4       -3         -2        -1
// //                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// criando uma array para entender quem foi removido
// simulando o pop
const removidos = nomes.splice(4, 1); // julia será removida
console.log(nomes, removidos);