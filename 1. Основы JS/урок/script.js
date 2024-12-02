//VAR
/* console.log("ПРИВЕТ") // -> для вывода информации
var name // declaration - создание переменной
name = "Narteezy" // initialization - присвоение значения
console.log(name)
var age = 21 // declaration + initialization
console.log(age) */

//LET
// let speciality = "Frontend разработчик"
// console.log(speciality)
// speciality = "Backend разработчик"
// console.log(speciality)

// CONST
// const university = "APK"
// university = "FinAcademy"
// console.log(university)

// ТИПЫ Данных
// string - строка ("Привет")
// number - цифра (5)
// boolean - булевое (true/false)
// null - нул
// undefined - неопределенность
// object - объект
// symbol - символ


// const myFavouriteCoffee = "Американо с молоком и карамелью" //camelCase
// // const my_favourite_coffee = "Американо с молоком и карамелью" //snakeCase

//NUMBER
// const screenSize = 15.6
// console.log(screenSize)

//boolean
// const isMale = true
// const isFemale = false
// console.log(isMale, isFemale)

// //UNDEFINED
// let color
// console.log(color)

//NULL
// const secondName = null
// console.log(secondName)

//OBJECT
// const model = 'Lenovo Legion 5'
// const screenSize = 15.6
// const ssdSize = '512Gb'
// const gpu = 'RTX 3070ti'

// const model2 = 'Lenovo Legion 5'
// const screenSize2 = 16
// const ssdSize2 = '256Gb'
// const gpu2 = 'RTX 2080ti'

// const laptop1 = {
//    model: 'Lenovo Legion 5',
//    screenSize: 15.6,
//    ssdSize: '512Gb',
//    gpu: 'RTX 3070ti'
// }

// const laptop2 = {
//    model: 'Lenovo Legion 4',
//    screenSize: 16,
//    ssdSize: '256Gb', 
//    gpu: 'RTX 2080ti'
// }

// console.log(laptop1, laptop2)

// alert('ПРИВЕТ!') //уведомление в браузере
// const name = prompt('Введите ваше имя:')
// console.log(name)

// const age = prompt('Ваш возраст: ')
// console.log(+age)
// console.log(Number(age))
// console.log(+'asdasdasd')

// CONFIRM
// const answer1 = confirm('Вы гражданин РК?')
// console.log(answer1)

// alert('Привет') //не работает через nodeJS

//ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// console.log(10 > 5)
// console.log(5 < 2)
// console.log(10 == 10)
// console.log(10 != 10)
// console.log(10 >= 10)
// console.log(11 >= 10)
// console.log(10 === 10)
// console.log('10' == 10)
// console.log('10' === 10)

//ОПЕРАТОРЫ && / || -> И / ИЛИ
// React или Angular (||)

// console.log(true || false) //true
// console.log(false || true) //true
// console.log(true || true) //true
// console.log(false || false) //true

// больше 3 лет стажа, а также чтобы он был Фронтендер
// console.log(true && false) //false
// console.log(false && true) //false
// console.log(false && false) //false
// console.log(true && true) //true

//УСЛОВИЯ - if, else
// const age = +prompt('Сколько вам лет?')
// if(age >= 21 && age <= 120) { // if (true)
//    alert('Вы можете покупать сигареты')
// }
// else if(isNaN(age) || age < 0 || age > 120) {
//    alert('Пожалуйста, введите корректные данные')
// }
// else {
//    alert('Вам нельзя покупать сигареты(')
// }

// const name1 = prompt('Введите ваше имя:')
// alert(`Привет, ${name1}!`)

// const number = +prompt('Введите любое число:')
// const numberPower = +prompt('В какую степень возвести это число?')
// alert(`Резултат: ${number ** numberPower}!`)

// let age = 21
// age = age + 1 //21 + 1 = 22
// age += 1 //оптимизированно

// age++ // еще сокращенно ++ -> age += 1 -> age = age + 1

// let text1 = "my text"
// if(text1 === "some text") {
//    text1 = "another text"
// }
// else(text1 = "some text")
// console.log(text1)

// let number = 20
// if(number === 0) {
//    number = 1
// }
// else if(number < 0) {
//    number = "less then zero"
// }
// else if(number > 0) {
//    number *= 10
// }
// console.log(number)

// const num = +prompt('Введите любое число:')
// let result
// if(num > 5) {
//    result = '0'
// }
// else {
//    result = '1'
// }
// console.log(result)

// const num1 = +prompt('Введите одно число:')
// const num2 = +prompt('Введите второе число:')
// let result
// if(num1 > num2) {
//    result = 'Большее число: ' + num1
// }
// else if (num1 < num2) {
//    result = 'Большее число: ' + num2
// }
// else {
//    result = 'Числа равны'
// }
// console.log(result)

// const num1 = +prompt('Введите одно число:')
// const num2 = +prompt('Введите второе число:')
// let result = num1 % num2
// if(result === 0) {
//    result = `${num1} является кратным к ${num2}`
// }
// else {
//    result = `${num1} не является кратным к ${num2}`
// }
// console.log(result)

// const GPA = +prompt('Введите средний балл успеваемости:')
// let result
// if(GPA >= 1 && GPA <= 4) {
//    result = "Двоечник, иди учись!"
// }
// else if(GPA >= 5 && GPA <= 8) {
//    result = "Неплохо, но давай еще поднажмем!"
// }
// else if(GPA >= 9 && GPA <= 10) {
//    result = "Ого, да ты настоящий отличник!"
// }
// console.log(result)

const mark = +prompt('Сколько баллов получили за экзамен:')
const project = +prompt('Сколько проектов выполнили:')
let result
if(mark > 90 || project > 10) {
   result = 100
}
else if(mark > 75 && project >= 5) {
   result = 90
}
else if(mark > 50 && project >= 2) {
   result = 75
}
else {
   result = 0
}
console.log(`Общий выпускной балл: ${result}!`)