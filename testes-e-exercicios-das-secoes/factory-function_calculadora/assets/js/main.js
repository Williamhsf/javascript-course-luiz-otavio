function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    //metodos
    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    //envio com enter
    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizandoConta();
        }
      });
    },
   
    //realizando operacoes
    realizandoConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert('conta invalida');
          return;
        }

        this.display.value = String(conta);
      } catch(e) {
        alert('conta invalida');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    //evento
    cliqueBotoes() {
      document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        //limpar
        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        //apagar um
        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        //igual
        if(el.classList.contains('btn-eq')) {
          this.realizandoConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    }

  }
}

const calculadora = criaCalculadora();
calculadora.inicia();