const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

//função que cria uma LI, precisaremos de duas funções.. uma que chame a outra
function criaLi() {
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

//vamos criar o botão apagar
function criaBotaoApagar(li) {
  //criando botao apagar dentro da .li
  const botaoApagar = document.createElement('button');
  //texto dentro do botao
  botaoApagar.innerText = 'Apagar';
  //chamando o botao dentro da lista
  li.appendChild(botaoApagar);
  //dando uma classe para esse botao e dizendo o que ele vai fazer
  botaoApagar.setAttribute('class','apagar');
  botaoApagar.setAttribute('title','apagar este botao');
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
}

btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

//verificando botoes clicados
/* document.addEventListener('click', function (e) {
    const el = e.target;
    console.log(el);
});*/
 
 //pegando o target do botao apagar
document.addEventListener('click', function (e) {
  const el = e.target;
  
  if(el.classList.contains('apagar')){
    // console.log('apagar clicado');
    //removendo PAI
    el.parentElement.remove();
  }
});

//proxima secao salvar lista