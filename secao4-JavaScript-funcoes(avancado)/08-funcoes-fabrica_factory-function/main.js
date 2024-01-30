function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    fala: function(assunto) {
      return `${nome} esta ${assunto}`
    }
  }
}
const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.nome);
console.log(p1.sobrenome);

console.log(p1.fala('falando sobre JS'));