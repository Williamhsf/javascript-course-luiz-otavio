// William Henrique tem 32 anos, pesa 84 kg
// tem 1.8 de altura e seu imc é de 20
//William Henrique nasceu em 1980

const nome = 'William Henrique';
const sobrenome = 'Soares Ferreira';
const idade = 33;
const peso = 89;
const altura = 1.79;
let imc = peso / (altura * altura);
let anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
