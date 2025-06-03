// function clickButton() {
//     alert('Кнопка была нажата!')
// }

// Способ 2 - метод onclick
// const button = document.querySelector('#button')
// button.onclick = function() {
//     alert('Кнопка была нажата!')
// }

// Способ 3 - метод addEventListener
// const button = document.querySelector('#button')
// button.addEventListener('click', (event) => {
//     console.log(event)
//     alert('Кнопка была нажата!')
// })

// const button = document.querySelector('#button')
// button.addEventListener('mouseover', () => {
//     console.log('Наведение на кнопку')
//     button.style.color = 'green'
// })
// button.addEventListener('mouseout', () => {
//     console.log('Отведение от кнопки')
//     button.style.color = 'red'
// })


// РАБОТА С ФОРМАМИ
// const loginBtn = document.getElementById('loginBtn')
// const emailInput = document.getElementById('emailInput')
// const passwordInput = document.getElementById('passwordInput')

// loginBtn.addEventListener('click', (event) => {
//     event.preventDefault()
//     console.log(emailInput.value)
//     console.log(passwordInput.value)
// })

// emailInput.addEventListener('change', () => {
//     console.log(emailInput.value)
// })

// emailInput.addEventListener('keydown', (e) => {
//     // console.log(e.key)
//     console.log(emailInput.value)
// })

// emailInput.addEventListener('keyup', () => {
//     console.log(emailInput.value)
// })


// ЗАДАНИЕ 1
// const inputTag = document.getElementById('inputTag')
// const ulTag = document.getElementById('ulTag')

// inputTag.addEventListener('keyup', (event) => {
//     console.log(event.key)
// })


// ЗАДАНИЕ 2
// const inputTag = document.querySelector('#inputTag')
// inputTag.addEventListener('keyup', () => {
//     console.log(inputTag.value)
// })

// ЗАДАНИЕ 3
// const formTag = document.getElementById('formTag')
// const inputTag = document.getElementById('inputTag')
// const buttonTag = document.getElementById('buttonTag')
// const ulTag = document.getElementById('ulTag')

// buttonTag.addEventListener('click', (event) => {
//     event.preventDefault() // предотвратить обновление страницы
//     // const liTag = document.createElement('li')
//     // liTag.innerText = inputTag.value
//     // ulTag.appendChild(liTag)
//     // inputTag.value = ''
// })

// formTag.addEventListener('submit', (event) => {
//     event.preventDefault() // предотвратить обновление страницы
//     console.log(inputTag.value)
//     const liTag = document.createElement('li')
//     liTag.innerText = inputTag.value
//     ulTag.appendChild(liTag)
//     inputTag.value = ''
// })


// ЗАДАНИЕ 4
const number1Input = document.getElementById('number1Input')
const operatorSelect = document.getElementById('operatorSelect')
const number2Input = document.getElementById('number2Input')
const confirmBtn = document.getElementById('confirmBtn')
const resultDiv = document.getElementById('resultDiv')

// confirmBtn.addEventListener('click', () => {
//     const number1 = +number1Input.value
//     const number2 = +number2Input.value
//     const operator = operatorSelect.value

//     if(Number.isNaN(number1) || Number.isNaN(number2)) {
//         alert('Невалидные данные!')
//         return
//     }
    
//     let result

//     switch(operator) {
//         case '+':
//             result = number1 + number2
//             break
//         case '-':
//             result = number1 - number2
//             break
//         case '/':
//             result = number1 / number2
//             break
//         case '*':
//             result = number1 * number2
//             break
//         default:
//             result = 'Ошибка'
//             break
//     }

//     resultDiv.innerText = `Результат: ${result}`
// })

// confirmBtn.addEventListener('click', () => {
//     const number1 = +number1Input.value
//     const number2 = +number2Input.value
//     const operator = operatorSelect.value

//     if(Number.isNaN(number1) || Number.isNaN(number2)) {
//         alert('Невалидные данные!')
//         return
//     }
    
//     const expression = `${number1} ${operator} ${number2}`
//     const result = eval(expression)

//     resultDiv.innerText = `Результат: ${result}`
// })
