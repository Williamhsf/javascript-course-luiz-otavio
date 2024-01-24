// this é quem assume a responsabilidade de ser chamado
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        // tirando o function podemos encurtar o codigo
        fala(assunto) {
            return `${this.nome} esta ${assunto}.`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio');
// testando outro nome
const p2 = criaPessoa('Maria', 'Joaquina');
console.log(p2.fala('falando sobre JS'));