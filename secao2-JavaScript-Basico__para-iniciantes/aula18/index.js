// criando uma função que retorna a criação de uma pessoa
function criaPessoa (nome, sobrenome, idade) {
  return {
    nome, sobrenome, idade
  };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Miranda', 55);

console.log(pessoa1.nome, pessoa2.nome)

// ======================================================================
// criando pessoa falando algo
const pessoa3 = {
  nome: 'William', 
  sobrenome: 'Henrique', 
  idade: 25,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
  }
}

pessoa3.fala();

// ======================================================================
// criando pessoa falando idade
const pessoa4 = {
  nome: 'Rafaela', 
  sobrenome: 'Carvalho', 
  idade: 55,

  fala() {
    console.log(`A minha idade atual é ${this.idade}.`)
  },

  incrementaIdade() {
    this.idade++;
  }
}

pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();