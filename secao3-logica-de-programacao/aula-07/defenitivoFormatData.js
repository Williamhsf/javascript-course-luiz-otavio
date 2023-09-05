const data = new Date();
const dataBrasil = formatData(data);

//operação ternária (irá add um zero a esquerda de numeros entre 
// 0 e 10)
function zeroEsquerda (num) {
  return num >= 10 ? num : `0${num}`;
}

function formatData(data) {
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  const hora = data.getHours();
  const minuto = data.getMinutes();
  const seg = data.getDay();

  return  `${dia}/${mes}/${ano} ${hora}:${minuto}:${seg}`;
}

console.log(dataBrasil);