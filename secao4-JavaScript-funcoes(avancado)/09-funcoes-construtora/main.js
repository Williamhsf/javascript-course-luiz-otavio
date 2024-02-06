// Funcao construtora - constroi objetos
// Funcao fabrica - fabrica objetos
// construtora -> sempre inicia com letra maiuscula Pessoa (new)

function Pessoa(nome, sobrenome) {
  // Atributos ou Metodos Publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ': sou um metodo');
  };
}

// new cria o objeto vazio e usa o this para retornar ao mesmo
const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();
p2.metodo();