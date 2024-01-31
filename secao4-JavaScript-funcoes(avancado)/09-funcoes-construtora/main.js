// Funcao construtora - constroi objetos
// Funcao fabrica - fabrica objetos
// construtora -> sempre inicia com letra maiuscula Pessoa (new)



function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'otavio');
console.log(p1.nome)

const p2 = new Pessoa('Maria', 'otavio');