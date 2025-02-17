// function clickButton() {
//    alert('Кнопка была нажата!')
// }

// // Способ 2 - метод onclick
// const button = document.querySelector('#button')
// button.onclick = function() {
//    alert('Кнопка была нажата!')
// }

// Способ 3 - метод addEventListener
// const button = document.querySelector('#button')
// button.addEventListener('click', () => {
//    alert('Кнопка была нажата!')
// })

// const button = document.querySelector('#button')
// button.addEventListener('mouseover', () => {
//    alert('Наведение на кнопку')
// })

const loginBtn = document.getElementById('loginBtn')
const emailInput = document.getElementById('emailInput')
const passInput = document.getElementById('passInput')
// console.log(loginBtn, emailInput, passInput)

loginBtn.addEventListener('click', () => {
   event.preventDefault()
   console.log(emailInput.value)
})

