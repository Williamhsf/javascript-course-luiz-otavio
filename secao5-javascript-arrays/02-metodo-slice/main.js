// //               -5       -4       -3         -2        -1
// //                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// splice -> quer dizer em 'qual indice eu quero mexer' e 'quantos quero remover' - 
// nomes.splice(0, 2);
// nomes.splice(índice atual, delete, elem1, elem2, elem3);

// simulando pop - removendo o ultimo elemento;
nomes.splice(4, 1); // julia será removida
console.log(nomes);