// &&
// Бонус - функцию создать isInInterval()

// function checkIsInterval(n) { 
//     console.log((n >= 0 && n <= 100)
//     ? 'n находится в диапазоне от 0 до 100 включительно.'
//     : 'n находится вне диапазона от 0 до 100.'
// )
// } 
// checkIsInterval(50)

// let n = 110;

// function checkIsNumberInterval(n) {
//     return n >= 0 && n <=100
//     ? "Перемнная n в диапазоне от 0 до 100 включительно"
//     : "Перемнная n не находится в диапазоне от 0 до 100";
// }
// const result1 = checkIsNumberInterval(n)
// console.log(result1)

// ЗАДАНИЕ 1
// const n = -20

// function isInInterval(num) {
//     if(typeof num !== 'number') {
//         return null
//     }
//     else {
//         return num >= 0 && num <= 100 // true && true
//     }
// }

// const result1 = isInInterval(n)
// const result2 = isInInterval("150")

// if(result1 === null) {
//     console.log('Неправильные данные')
// }
// else if(result1) {
//     console.log('Переменная входит в интервал')
// }
// else {
//     console.log('Переменная не входит в интервал')
// }

// if(result2 === null) {
//     console.log('Неправильные данные')
// }
// else if(result2) {
//     console.log('Число находится в диапазоне')
// }
// else {
//     console.log('Число не входит в диапазон')
// }

// console.log(typeof true)


// ОБЬЕКТЫ

// const name = "iPhone 15 pro"
// const color = 'white'
// const storage = 512
// const isNew = true

// const name2 = 'Samsung galaxy s24 ultra'
// const color2 = 'black'
// const storage2 = 256
// const isNew2 = false

// key: value -> ключ: значение
// field: value -> поля: значение
// parameter: value -> параметр: значение
// parameter: value -> свойство: значение ->

// ТИП ДАННЫХ ПОЛЕЙ ВСЕГДА СТРОКА (STRING)

// function customShowInfo() {
//     // метод обьекта - функция обьекта
//     console.log('Name: ' + phone2.name)
//     console.log('Color: ' + phone2.color)
//     console.log('Storage: ' + phone2.storage + 'gb')
//     console.log('Состояние: ' + (phone2.isNew ? 'Новый' : 'Б/У'))
// }

// const phone1 = { 
//     name: "iPhone 15 pro",
//     color: "white",
//     storage: 512,
//     isNew: true,
// }

// const phone2 = {
//     name: 'Samsung galaxy s24 ultra',
//     color: "black",
//     storage: 256,
//     isNew: false,
//     showInfo: customShowInfo,
// }

// // console.log('Phone 1:', phone1)
// // console.log('Phone 2:', phone2)

// // console.log(phone1.name)
// // console.log(phone2['name'])

// // ОБЬЕКТ ВСЕГДА АКТУАЛЬНЫЙ
// phone1.storage = 256
// phone1.storage = null
// delete phone1.storage

// // phone2.showInfo() // метод
// // customShowInfo() // функция


// // Добавление новых полей
// phone1.isHasWaranty = true



// FOR-IN
// const laptop1 = {
//     model: 'Macbook Air m2',
//     releaseDate: '2022-06-06',
//     ram: 8,
//     screenSize: '13.6',
//     brand: 'APPLE'
// }

// for (const key in laptop1) {
//     // laptop1.key -> laptop1["key"]
//     // laptop1[key] -> laptop1["screenSize"]

//     // console.log(laptop1.key) // так нельзя
//     console.log(key, laptop1[key])
// }


// ЗАДАНИЕ 2
// const engineers = {
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000
// }
// for (const key in engineers) {
//     console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей.`)
// }


// ARRAY
// const object1 = {
//     name: 'Olzhas',
//     age: 21
// }

// const object2 = {
//     age: 21,
//     name: 'Olzhas'
// }

// object2.age
// object2['age']

// const numbers = [20, 56, 234, 97, 6, 24, 49, 90]
// console.log(numbers.length)
// console.log(numbers[2]) // array[index]
// console.log(numbers[0])

// Всегда получать последний элемент
// console.log(numbers[numbers.length - 1])
// console.log(numbers[6]) // если не нашли элемент по индексу -> undefined

// FOR
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }


// ЗАДАНИЕ 3
// let numbers = [42, 65, 49, 68, 56]
// for(let i= 0; i < numbers.length; i++){
//     if(i % 2 !== 0){
//         console.log(numbers[i])
//     }
// }

// 1 - способ
// const numbers = [2, 5, 7, 9, 3]
// for (let i = 1; i < numbers.length; i += 2) {
//     console.log(numbers[i]) // numers[3]
// }

// 2 - способ
// let numbers = [42, 65, 49, 68, 56]
// for(let i= 0; i < numbers.length; i++){
//     if(i % 2 !== 0){
//         console.log(numbers[i])
//     }
// }


// ЗАДАНИЕ 4
// const numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// for (let i = 0; i < numbers.length; i++) {
//     console.log(`Индексу ${i} соответствует число ${numbers[i]}`)
// }


// FOR OF
// const names = ['Olzhas', 'Indira', 'Nazgul', 'Olzhas', 'Ainagul', 'Akzhan', 'Moldir', 'Rabiga']
// for (const element of names) {
//     console.log(element)
//     // console.log(names.indexOf(element))
// }

// for (const index in names) {
//     console.log(index)
// }

// ЗАДАНИЕ 5
// let questions = [
//     {
//         question: "What's the currency of the USA?",
//         choices: ["US dollar", "Ruble", "Horses", "Gold"],
//         corAnswer: 0
//     },
//     {
//         question: "Where was the American Declaration of Independence signed?",
//         choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//         corAnswer: 0
//     }
// ];

// let questions = [24242, 2464363]

// for (const element of questions) {
//     element.usersAnswer = null
// }

// console.log(questions)

// for (const index in questions) {
//     console.log(questions[index])
// }

// for (let i = 0; i < questions.length; i++) {
//     console.log(questions[i])
// }

// const names = ['Olzhas', 'Indira', 'Nazgul']
// names.push('Guzel', 'Akzhan') // Добавляем в конец
// names.unshift('Moldir') // Добавлям в начало
// names.pop() // удалить элемент в конце
// names.pop()
// names.shift() // удалить элемент в начале

// console.log(names)

// Вычислить сумму всех чисел в массиве
// const numbers = [2, 5, 6, 23, 97]
// let sum = 0

// for (const number of numbers) {
//     sum += number
// }

// console.log(sum)

// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// for (const number of numbers) {
//     console.log(number)
// }


// ЗАДАНИЕ 6
const numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// 1
// for (const n of numbers) {
//     console.log(n)
// }

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// 2
// let sum = 0
// for (const n of numbers) {
//     sum += n
// }
// console.log(sum)

// 3
// let sumEven = 0
// for (const n of numbers) {
//     if (n % 2 === 0) {
//         sumEven += n
//     }
// }

// console.log(sumEven)

// 4

// 49 > 65
// let max = 0
// for (const n of numbers) {
//     if (n > max) {
//         max = n
//     }
// }
// console.log(max)


// 5
// let max = 0
// for (const n of numbers) {
//     if (n > max) {
//         max = n
//     }
// }
// console.log(max)

// let indexes = []
// for (const index in numbers) {
//   if (numbers[index] === max) {
//     indexes.push(index)
//   }
// }

// console.log(indexes)


