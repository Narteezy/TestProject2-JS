// let number = 10
// for (let i = 0; i < 10; i++){
//    number++
// }
// console.log(`Итог: ${number}`)


// for (let i = 0; i < 10; i += 2) {
//    let number = +prompt('Введите любое число:')
//    console.log(number === 10 ? 'Равно 10' : 'Не равно 10')
// }

// const name = 'Nartay'
// const age = 21
// const height = 180
// const gender = 'male'
// const isMarried = false

// function showPersonInfo(name, age, height, gender) {
//    console.log(`Имя: ${name}`)
//    console.log(`Возраст: ${age}`)
//    console.log(`Рост: ${height}`)
//    console.log(`Пол: ${gender}`)
// }

// showPersonInfo()

// const showPersonInfo = () => {
//    console.log('Функция работает!')
// }

// showPersonInfo()

// function power(num1, num2) {
//    return num1 ** num2
// }

// const result1 = power(4, 3)
// console.log(result1)

// function checkKrat(num1, num2) {
//    return (num1 % num2 === 0 ? `Число ${num1} кратно к числу ${num2}` : `Число ${num1} некратно к числу ${num2}`)
// }

// const res1 = checkKrat(10,5)
// const res2 = checkKrat(10,7)

// console.log(res1)
// console.log(res2)

// const phone1 = {
//    name: 'iPhone SE',
//    color: 'white',
//    isNew: true,
// }

// console.log(phone1.isNew)

// const laptop1 = {
//    model: 'Macbook Air m2',
//    releaseDate: '01.01.2020',
//    ram: 8
// }

// for (const key in laptop1) {
//    console.log(key,`: ${laptop1[key]}`)
// }

// const engineers = {
//    Dan: 1000,
//    Matt: 5000,
//    Steve: 2000
// }
// for (const key in engineers) {
//    console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей`)
// }

// const numbers = [2, 23, 36, 45, 58, 62]
// for (let i = 1; i < numbers.length; i += 2) {
//    console.log(numbers[i])
// }

// let numbers = [42, 62, 4546, 4654, 454, 878, 787, 7878, 9988]
// for (const key in numbers) {
//    console.log(`Индексу ${key} соответствует число ${numbers[key]}`)
// }
// const names = ['Olzhas', 'Nartay', 'Rabiga', 'Perizat']
// for (const element of names) {
//    // console.log(element)
//    console.log(names.indexOf(element))
// }

// let questions = [{
//    question: 'asdasdasdasd?',
//    choices: ['asdas', 'sdasda', 'sdasdasd', 'sadsd'],
//    corAnswer: 0
// }, {
//    question: 'rrrrrrrrrr?',
//    choices: ['rrrrr', 'rrrrrr', 'rr', 'rrrr'],
//    corAnswer: 0
// }];

// for (const element of questions) {
//    console.log(element)
//    element.usersAnswer = null
// }

// const names = ['Olzhas', 'Nartay', 'Rabiga', 'Perizat']
// names.push ('Aslan', 'Raze')
// names.shift()
// console.log(names)


// const numbers = [2, 5, 6, 23, 97]
// let sum = 0
// for (const number of numbers) {
//    sum = sum + number
// }
// console.log(sum)

// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// 1)
// for (const element of numbers) {
//    console.log(element)
// }

// for (let i = 0; i < numbers.length; i++) {
//    console.log(numbers[i])
// }

// 2)
// let sum = 0
// for (const elements of numbers) {
//    sum = sum + elements
// }
// console.log(sum)

//3)
// let sum = 0
// for (const elements of numbers) {
//    elements % 2 === 0 ? (sum = sum + elements) : sum = sum
// }
// console.log(sum)

// let max = 0
// for (let i = 0; i < numbers.length; i++) {
//    numbers[i] > max ? max = numbers[i] : max = max
//    }
// console.log(max)

// let max = 70
// let maxIndexes = []
// for (let i = 0; i < numbers.length; i++) {
//    if(numbers[i] === max) {
//       maxIndexes.push(i)
//    }
// }
// console.log(`Индексы максимального числа ${max}: ${maxIndexes}`)

// function sum(num1, num2) {
//    if (typeof num1 === 'undefined' || typeof num2 === 'undefined') {
//       console.log('Введите два параметра')
//    }
//    else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//       console.log('Введенные данные не являются числами')
//    }
//    else {
//       console.log(num1 + num2)
//    }
// }


// sum(2, 4)
// sum('d', 4)
// sum(1, [2])
// sum(1)
// sum()

// function square(a) {
//    if (typeof a === 'undefined'){
//       console.error('Функция "square" не может быть вызвана без аргумента')
//    }
//    else {
//       console.log(a * a)
//    }
// }

// square(5)
// square()

// let randomNum

// function getRandomArbitrary(min, max) {
//    min = Math.ceil(min)
//    max = Math.floor(max)
//    return Math.floor(Math.random() * (max - min) + min);
// }

// const jackPot = (num) => {
//    randomNum = getRandomArbitrary(1, 10)
//    if (num < 1 || num > 10) {
//       return
//    }
//    else if (num === randomNum) {
//       console.log('Вы выиграли')
//    }
//    else {
//       console.log(`Вы не угадали, ваше число ${num}, а выпало число ${randomNum}`)
//    }
// }

// jackPot(500)
// jackPot(7)

// const numbers = [5, -6, 7, -8, 9, 10, -11]
// numbers.forEach((value, index) => {
//    console.log(value, index)
// })

// const numbersClone = numbers.map((value) => {
// if (value < 0) {
//    return null
// }
//    return value
// }
// )
// console.log(numbersClone)
// console.log(numbers)

// const arr = [5, 6, 7, 8]
// function copyArr(arr) {
//    const arrClone = arr.map((value) => {
//       return value
//    })
//    return arrClone
// }
// console.log(arr)
// const copiedArr = copyArr(arr)
// console.log(copiedArr)

// const names = ['Nartay', 'Riza', 'Indira']
// function helloName() {
//    return names.map((value) => `Hello, ${value}`)
// }
// console.log(names)
// const newArr = helloName(names)
// console.log(newArr)

// function ucFirst(str) {
//    return str[0].toUpperCase() + str.slice(1)
// }

// console.log(ucFirst('nartay'))

// function checkSpam(str) {
//    return (str.toLowerCase().includes('badword') || str.toLowerCase().includes('xxx'))
//    }

// console.log(checkSpam('xXx'))
// console.log(checkSpam('asd'))
// console.log(checkSpam('BadWoRD'))
// console.log(checkSpam('badWORD'))


// let items = [[14, 45], [1], ['a', 'b', 'c']]
// const sortedItemsByLength = items.sort((a, b) => {
//    if (a.length > b.length) {
//       return 1
//    }
//    if (a.length < b.length) {
//       return -1
//    }
//    return 0
// })

// console.log(sortedItemsByLength)
