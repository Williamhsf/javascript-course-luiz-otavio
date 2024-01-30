function criaPessoa(nome, sobrenome, a, p) {
  return {
      nome,
      sobrenome,

      // getter que ira pegar o nome completo
      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
      },

      // setter
      set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
        console.log(valor);
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