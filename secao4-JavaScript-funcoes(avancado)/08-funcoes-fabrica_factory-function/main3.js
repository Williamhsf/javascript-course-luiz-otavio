// this é quem assume a responsabilidade de ser chamado
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // tirando o function podemos encurtar o codigo
        fala(assunto) {
            return `${this.nome} esta ${assunto}.`;
        },

        altura: a,
        peso: p,

        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
console.log(`${p1.nome} ${p1.sobrenome} seu imc eh de ${p1.imc()}`);
console.log(p1.imc());

const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 40);
console.log(`${p2.nome} ${p2.sobrenome} seu imc eh de ${p2.imc()}`);
console.log(p2.imc());