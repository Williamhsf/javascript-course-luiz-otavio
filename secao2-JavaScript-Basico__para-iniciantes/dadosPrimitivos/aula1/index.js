const nome0 = 'Luiz'; //string
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string

const num1 = 10; //number
const num2 = 10.52; //number

let nomeAluno; //undefined -> não aponta pra local nenhum na memoria
const sobreNomeAluno= null; //nulo -> não aponta pra local nenhum na memoria

const aprovado = false; //boolean = true false (lógico)


function situacao() {
  nota1 = 10;
  nota2 = 5;

  media = nota1 + nome2 / 2;

  if(media >= 6){
    print("aprovado")
  }else{
    print("reprovado")
  }
}

situacao()