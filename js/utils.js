// funções do IMC
export function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

// função de validação
export function notNumber(value) {
  return isNaN(value) || value == ''
}
