// Em arrays não são indexados pelo seu valor igual as strings
// mas pala quantidade de elementos
//                0        1        2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[0]);

// alterar um elemento
alunos[0] = 'Eduardo';
// na ausencia de elementos pode-se da mesma forma adicionar mais um
alunos[3] = 'Luiza';

//? ===============================================================
//? outra maneira sem precisar de determinar quantidade ou posição 
//? são estas LENGTH (adicionam no fim)
alunos[alunos.length] = 'Leila';
alunos[alunos.length] = 'Romulo';
alunos[alunos.length] = 'Jorge';

//! ========================================================
//! E outra maneira é com o metodo PUSH (adicionam no fim)
alunos.push('William');
alunos.push('Freitas');
alunos.push('Vasco');
console.log(alunos);

//? ============================================
//? remover primeiro elemento
const removido = alunos.shift();
console.log(removido)

//? remover último elemento
const removidos = alunos.pop();
console.log(removidos)