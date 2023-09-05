/*
    entre 0 - 11 = bom dia
    entre 12 - 17 = boa tarde
    entre 18 - 23 = boa noite

*/ 

// podemos usar condições sem ELSE IF, utilizando apenas IF e ELSE
// if pode ser usado SOZINHO
// sempre que utilizar ELSE usar o bloco IF antes
// posso ter quantos ELSE IF for NECESSARIO
// só posso ter um ELSE na checagem

console.log("======sisteminha de compimentos======");
const hora = 12;

if (hora >= 0 && hora <= 12) {
  console.log('bom dia');
} else if (hora >= 12 && hora <= 17) {
  console.log('boa tarde');
} else if (hora >= 18 && hora <= 23) {
  console.log('boa noite');
} else {
  console.log('olá, atualize seu relogio')  //caso contrario ou de algo muito do diferente do proposto (caso nenhuma das condições sejam avaliadas como verdadeira)
}

// =========================================================
console.log("====== devo sair de casa, sim ou não? ======");
const tenhoDinheiro = true;

if (tenhoDinheiro) {
  console.log('vou sair de casa')
} else {
  console.log('nao vou sair de casa')
}