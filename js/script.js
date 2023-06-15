import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { IMC, notNumber} from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = event => {
  event.preventDefault()

  let weight = inputWeight.value
  let height = inputHeight.value

  const alertError = notNumber(weight) || notNumber(height)

  if (alertError) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = IMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  
  Modal.message.innerText = message
  Modal.open()
}