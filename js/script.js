import { Modal } from './modal.js'

// variables
const form = document.querySelector('form');
const inputWeigth = document.querySelector('#weigth');
const inputHeight = document.querySelector('#height');

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

// funções
function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}