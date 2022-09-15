const inputNumber = document.querySelector('.input-text')
const formSubmit = document.querySelector('form')
const hideScreen1 = document.querySelector('.screen1')
const showScreen2 = document.querySelector('.screen2')
const btnPlayAgain = document.querySelector('.btn-again')

let randomNumber = randomNumberGenerator()
let xAttempts = 1

formSubmit.addEventListener('submit', submitForm)
btnPlayAgain.addEventListener('click', handlePlayAgain)

function submitForm(e) {
  e.preventDefault()

  if (Number(inputNumber.value) == randomNumber) {
    toogleScreen()
    displayResultGame()
  }
  console.log(
    `Input Number: ${inputNumber.value}\nAttempts: ${xAttempts}\nRandom Number: ${randomNumber}`
  )

  inputNumber.value = ''

  xAttempts++
}
function handlePlayAgain() {
  toogleScreen()
  randomNumber = Math.round(Math.random() * 10)

  console.log(randomNumber)
  xAttempts = 1
}
function toogleScreen() {
  hideScreen1.classList.toggle('hide')
  showScreen2.classList.toggle('hide')
}
function randomNumberGenerator() {
  let result = Math.round(Math.random() * 10)
  return result
}
function displayResultGame() {
  showScreen2.querySelector(
    'h2'
  ).innerText = `Acertou em ${xAttempts} tentativas`
}
