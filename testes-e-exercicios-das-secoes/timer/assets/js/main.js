const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer; 

// formatar a hora para comecarmos o cronometro todo zerado
function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000); //javaScript interpreta milesimos de segundos., por isso a multiplicacao por mil para transforma em segundos

  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

//funcao para startar o relogio a partir dos segundos
function iniciaRelogio() {
  timer = setInterval(function() {
    segundos++; //sempre adicionara mais 1
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}

// eventos
iniciar.addEventListener('click', function(event) {
  relogio.classList.remove('pausado');
  clearInterval(timer);
  iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
  relogio.classList.add('pausado');
  clearInterval(timer);
});

zerar.addEventListener('click', function(event) {
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  segundos = 0;
});


//=====================================================================//
//===================Jeito mais pratico com uma unica funcao==========//
// function relogio() {
//   function criaHoraDosSegundos(segundos) {
//     const data = new Date(segundos * 1000);
//     return data.toLocaleTimeString('pt-BR', {
//       hour12: false,
//       timeZone: 'UTC'
//     });
//   }

//   const relogio = document.querySelector('.relogio');
//   let segundos = 0;
//   let timer;

//   function iniciaRelogio() {
//     timer = setInterval(function() {
//       segundos++;
//       relogio.innerHTML = criaHoraDosSegundos(segundos);
//     }, 1000);
//   }

//   document.addEventListener('click', function(e) {
//     const elemento = e.target; // ao clicar ele revela onde foi clicado na tela

//     if (el.classList.contains('zerar')) {
//       clearInterval(timer);
//       relogio.innerHTML = '00:00:00';
//       relogio.classList.remove('pausado');
//       segundos = 0;
//     }

//     if (el.classList.contains('iniciar')) {
//       relogio.classList.remove('pausado');
//       clearInterval(timer);
//       iniciaRelogio();
//     }

//     if (el.classList.contains('pausar')) {
//       clearInterval(timer);
//       relogio.classList.add('pausado');
//     }
//   });
// }
// relogio();