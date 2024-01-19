// se pego mais uma função, a mesma irá até o topo global buscar
// o que ela precisa (no caso o nome)

const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    falaNome();
}

usaFalaNome();