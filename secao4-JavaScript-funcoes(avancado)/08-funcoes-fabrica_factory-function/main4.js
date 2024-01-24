// this é quem assume a responsabilidade de ser chamado
function criaPessoa(nome, sobrenome, a, p) {
  return {
      nome,
      sobrenome,
      get nomeCompleto() {
        return `${nome} ${sobrenome}`;
      },
      // tirando o function podemos encurtar o codigo
      fala(assunto) {
          return `${this.nome} esta ${assunto}.`;
      },
      altura: a,
      peso: p,
      // getter
      get imc() {
          const indice = this.peso / (this.altura ** 2);
          return indice.toFixed(2);
      }
  };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
console.log(p1.nomeCompleto);
