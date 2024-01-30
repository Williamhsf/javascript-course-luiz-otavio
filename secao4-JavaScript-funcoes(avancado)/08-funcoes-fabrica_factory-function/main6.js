// this é quem assume a responsabilidade de ser chamado
function criaPessoa(nome, sobrenome, a, p) {
  return {
      nome,
      sobrenome,

      // getter
      get nomeCompleto() {
          return `${this.nome} ${this.sobrenome}`;
      },

      //setter
      set nomeCompleto(valor) {
          valor = valor.split(' ');
          this.nome = valor.shift();
          this.sobrenome = valor.join(' ');
          console.log(valor);
      },

      fala(assunto = 'falando sobre NADA') {
        return `${this.nome} esta ${assunto}`
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
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
console.log(p1.fala());

// teste criando pessoas
const p2 = criaPessoa('joao', 'Otavio', 1.7, 75);
console.log(`${p2.nome} seu eh ${p2.imc}`);
const p3 = criaPessoa('fred', 'Otavio', 1.6, 60);
console.log(`${p3.nome} seu eh ${p3.imc}`);
const p4 = criaPessoa('marcos', 'Otavio', 2.1, 110);
console.log(`${p4.nome} seu eh ${p4.imc}`);