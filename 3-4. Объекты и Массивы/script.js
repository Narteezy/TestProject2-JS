// let n = +prompt('Введите число:')
// if (n >= 0 && n <= 100) {
//    console.log(`Число ${n} находится в диапазоне от 0 до 100`)
// }
// else {
//    console.log(`Число ${n} не находится в диапазоне от 0 до 100`)
// }



// const n = 60
// function isInInterval(num) {
//    if(typeof num !== 'number') {
//       return null
//    }
//    return num >= 0 && num <= 100
// }
// const res1 = isInInterval (n)
// const res2 = isInInterval (150)

// if(res1 === null) {
//    console.log('Неправильные данные')
// }
// else if(res1) {
//    console.log('Переменная находится в диапазоне')
// }
// else {
//    console.log('Переменная не находится в диапазоне')
// }

// if(res2 === null) {
//    console.log('Неправильные данные')
// }
// else if(res2) {
//    console.log('Переменная находится в диапазоне')
// }
// else {
//    console.log('Переменная не находится в диапазоне')
// }


// key: value -> ключ: значение
// field: value -> поля: значение
// parameter: value -> параметр или же свойство: значение
// 

// function customShowInfo() {
//    console.log('Name: ' + phone2.name)
//    console.log('Color: ' + phone2.color)
//    console.log('Storage: ' + phone2.storage + 'gb')
//    console.log('Состояние: ' + (phone2.isNew ? 'Новый' : 'Б/у'))
// }

// const phone1 = {
//    name: 'iPhone 15 pro',
//    color: 'white',
//    storage: 512,
//    isNew: true,
// }

// const phone2 = {
//    name: 'Samsung A2',
//    color: 'black',
//    storage: 256,
//    isNew: false,
//    showInfo: customShowInfo,
// }

// // console.log('Phone 1: ', phone1)
// // console.log('Phone 2: ', phone2)

// // // console.log(phone1.name)
// // // console.log(phone2['name'])

// phone1.storage = 256
// phone1.storage = null
// delete phone1.storage

// customShowInfo()
// phone1.isHasWaranty = null

// const laptop1 = {
//    model: 'HP',
//    releaseDate: 2022,
//    ram: 8,
//    screenSize: '13.6',
//    brand: 'Hewlett-Packard',
// }

// for (const key in laptop1) {
//    console.log(key,  laptop1[key])
// }

// const engineers = {
//    Den: 1000,
//    Matt: 5000,
//    Steve: 2000
//    }

// for (const key in engineers) {
//    console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей`)
// }

// ARRAY - Массив
// const numbers = [20, 56, 234, 97, 6, 24, 49]
// // console.log(numbers.length)
// // console.log(numbers[2]) // array[index]
// // console.log(numbers[0])
// // console.log(numbers[numbers.length - 1]) // всегда получать последний элемент

// for (let i = 0; i < numbers.length - 1; i++) {
//    console.log(numbers[i])
// }

// const numbers = [1, 2, 3, 4, 5]
// for (let i = 1; i < numbers.length; i += 2) {
//    console.log(numbers[i])
// }

// let numbers = [1, 2, 3, 4, 5]
// for (let i = 0; i < numbers.length; i++) {
//    if (i % 2 !==0){
//       console.log(numbers[i])
//    }
// }

// const numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// for (let i = 0; i < numbers.length; i++) {
//    console.log(`Индексу ${i} соответствует число ${numbers[i]}`)
// }

// // FOR OF
// const names = ['ASD', 'SDA', 'ADS', 'SAD']
// for (const element of names) {
//    console.log(element)
//    // console.log(names.indexOf(element))
// }

// for (const index in names) {
//    console.log(names[index])
// }

// let questions = [{
//    question: "What's the currency of the USA?",
//    choices: ["US dollar", "Ruble", "Horses", "Gold"],
//    corAnswer: 0
// }, {
//    question: "Where was the American Declaration of Independence signed?",
//    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//    corAnswer: 0
// }];

// for (const element of questions) {
//    console.log(element)
//    element.usersAnswer = null
// }

// const names = ['ASD', 'FBV', 'ZXC', 'ERT']
// names.push('JBL', 'OPU') - // добавляем в конец
// names.unshift('AAA', 'QQQ') // добавляем в начало (более затратный, т.к. меняет всем элементам)
// names.pop()
// names.pop()
// names.pop()
// names.shift()
// console.log(names)

// const numbers = [2, 5, 6, 23, 97]
// let sum = 0
// for (const number of numbers) {
//    sum += number
// }
// console.log(sum)

// const numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// let sum = 0
// // for (const elements of numbers) {
// //    console.log(elements)
// // }

// // for (const nums in numbers) {
// //    console.log(numbers[nums])
// // }
// // for (const number of numbers) {
// //    sum += number
// // }
// // console.log(sum)

// // for (const number of numbers) {
// //    if (number % 2 === 0) {
// //       sum += number
// //    }
// // }
// //    console.log(sum)

// let max = numbers[0]
// for (let i = 1; i < numbers.length; i++) {
//    if(numbers[i] > max) {
//       max = numbers[i]
//       index = i
//    }
// }
// console.log(max)
// console.log(index)


// Задание 6

// Есть массив произвольных чисел:
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]


// 1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком

//FOR OF
// for (const num of numbers) {   
//    console.log(num)
// }
//FOR
// for (let i = 0; i < numbers.length; i++) {  
//    console.log(numbers[i])
// }



// 2) Посчитать и вывести в консоль сумму элементов в массиве.
// let sum = 0
// for (const num of numbers) {
//    sum += num
// }
// console.log(sum)


// 3) Посчитать и вывести в консоль сумму только четных чисел в массиве.
// let sumEven = 0
// for (const num of numbers) {
//    if ( num % 2 === 0) {
//       sumEven += num   }
// }
// console.log(sumEven)



// 4) Найти и вывести в консоль максимальное число массива.
// let max = 0
// for (const num of numbers) {
//    if ( num > max) {
//       max = num
//    }
// }
// console.log(max)

// 5) Определить и вывести в консоль индекс максимального числа массива 
// (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли 
// в прошлой части задачи, повторно его искать не нужно.
// let max = 0
// for (const num of numbers) {
//    if ( num > max) {
//       max = num
//    }
// }
// let indexes = []
// for (const index in numbers) {
//    if (numbers[index] === max) {
//       indexes.push(index)
//    }
// }
// console.log(indexes)
