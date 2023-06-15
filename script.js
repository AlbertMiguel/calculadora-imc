// variables
const form = document.querySelector('form');
const inputWeigth = document.querySelector('#weigth');
const inputHeight = document.querySelector('#height');

// const modalWrapper = document.querySelector('.modal-wrapper');
// const modalMessage = document.querySelector('.modal .title span');
// const modalBtnClose = document.querySelector('.modal button.close');

const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    },

}

// Eventos
form.onsubmit = (event) => {
    event.preventDefault()
    
    weigth = inputWeigth.value;
    height = inputHeight.value;
    
    const result = IMC(weigth, height);
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message;
    // modalWrapper.classList.add('open')
    Modal.open();

}

Modal.buttonClose.onclick = () => Modal.close()

// funções
function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}