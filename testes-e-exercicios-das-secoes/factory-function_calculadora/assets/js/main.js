function criaCalculadora() {
  return {
    display: document.querySelector('.display'),


    //metodos
    inicia() {
      this.cliqueBotoes;
    },

    cliqueBotoes() {
      // this -> calculadora
      document.addEventListener('click', e => {
        const el = e.target;
        

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }
      }
    },

    btnParaDisplay() {}
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();