// console.log('ПРИВЕТ') // вывод в консоль

/* console.log('ПРИВЕТ')
console.log('ПОКА') */ 

// Как комментировать код в JS

// // -> одна строка
// /* */ -> несколько строк

// ПЕРЕМЕННЫЕ
// var - забываем, let, const

/*
//VAR
var name = "Guzel"
// var name -> declaration (декларирования) - создание переменной
// = "Guzel" -> assigning (присваивание) - заполнить чем то переменную

console.log(name)

// undefined - не определенность
var age
age = 25
console.log(age) // 25
age = 21
console.log(age) // 21
*/

/*
// LET
let speciality = 'Frontend Developer'
speciality = 'Backend Developer'
// let speciality -> еще раз создавать нельзя
console.log(speciality)

// CONST
const salary = 400000
// salary = 350000 -> так нельзя
console.log(salary)

// ПРАВИЛО - сперва создаем переменную через const,
// если понимаем что она будет меняться меняем const на let
*/


// ТИПЫ ДАННЫХ
/*
let name = 'Nazgul'
name = 999
console.log(name)
*/

// string - строка
// number - цифра
// boolean - булевое (true/false)
// object - обьект
// null - нулл
// undefined - неопределенный
// symbol - символ

/*
// STRING
const laptopModel = 'Acer nitro 5'
// const laptopModel = "Acer nitro 5"
// const laptopModel = `Acer nitro 5`

// // camelCase
// const myName = 'Olzhas'
// // Snake Case
// const my_name = 'Olzhas'
// // Kebab Case - в JS не работает
// const my-name = 'Olzhas'
// // PascalCase
// const MyName = 'Olzhas'
// // UPPER Snake Case
// const MY_NAME = 'Olzhas'


// NUMBER
const displaySize = 15.6
console.log(displaySize)

// BOOLEAN
const isFinishedSchool = true
const isMale = true
const isFemale = false
console.log(isMale)

// OBJECT
// const name = 'Olzhas'
// const surname = "Otep"
// const age = 21
// const speciality = 'Frontend Developer'

// const name2 = 'Ainagul'
// const surname2 = 'Arstambayeva'
// const age2 = 25
// const speciality2 = 'Cosmetologist'

const person1 = {
    name: 'Olzhas',
    surname: 'Otep',
    age: 21,
    speciality: 'Frontend Developer'
}

const person2 = {
    name: 'Ainagul',
    surname: 'Arstambayeva',
    age: 25,
    speciality: 'Cosmetologist'
}

console.log(person1)
console.log(person2)

// NULL
const futureSalary = null
const secondName = null
console.log(null)

// UNDEFINED
let phoneNumber
console.log(phoneNumber)

*/

// АРИФМЕТИЧЕСКИЕ ОПЕРАТОРЫ
// console.log(10 + 5)
// console.log(10 - 5)
// console.log(10 * 5)
// console.log(10 / 5)

// const num1 = 20
// const num2 = 10
// console.log(num1 / num2)
// console.log((10 + 5) * 2)

// ОСТАТОК
// console.log(4 % 2)
// console.log(4 % 3)

// СТЕПЕНЬ
// console.log(4 ** 2)

// Конкатенация строк
// console.log('Привет' + 'Пока')
// console.log('Привет' + 2)
// console.log(2 + 'Привет')

// const name1 = 'Ainagul'
// const name2 = 'Moldir'
// const newYearMessage = ', поздравяю с новым годом!'
// console.log(name1 + newYearMessage)
// console.log(name2 + newYearMessage)

// const name3 = 'Erbol'
// console.log(`Добрый вечер ${name2}, Мы сегодня планируем корпратив. Приезжайте в 20:00`)



// ALERT
// console.log('ПРИВЕТ')
// alert('ПРИВЕТ')

// PROMPT
// const username = prompt('Введите имя: ')
// console.log(username)

// const age = prompt('Введите ваш возраст: ')
// console.log(+age)
// console.log(Number(age))
// console.log(+'dadsada') // NaN -> Not a Number
// console.log(Number('dadsada')) // NaN -> Not a Number

// CONFIRM
// const isAbove21 = confirm('Вам есть 21?')
// console.log(isAbove21)


// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// console.log(10 > 5)
// console.log(5 > 10)
// console.log(10 == 10)
// console.log(5 == 10)
// console.log(10 >= 10)
// console.log(11 >= 10)
// console.log(5 === 5)

// console.log(10 == '10')
// console.log(10 === '10')
// console.log(10 !== 10)

// // reverse
// console.log(!true)
// console.log(!false)
// console.log(!(10 === 10)) // !true

// Оператори И/ИЛИ (&& / ||)
// console.log(true || false) // true
// console.log(false || true) // true
// console.log(true || true) // true
// console.log(false || false) // false

// console.log(true && false) // false
// console.log(false && true) // false
// console.log(false && false) // false
// console.log(true && true) // true


// УСЛОВИЕ
// const age = prompt('Сколько вам лет?')
// if (age >= 21) { // if (true) -> if (20 >= 21)
//     console.log('Вам можно покупать сигареты!')
// }
// else {
//     console.log('Вам нельзя покупать сигареты!')
// }


// const answer1 = prompt('Напишите первый язык программирования, которую вы знаете:')
// const answer2 = prompt('Напишите второй язык программирования, которую вы знаете:')

// if (answer1 === 'JS' || answer2 === 'PHP') {
//     console.log('Вы нам подходите)')
// }
// else {
//     console.log('Вы нам не подходите. Мы вам перезвоним)')
// }

// const gender = prompt('Какой у вас пол?')
// const age = prompt('Сколько вам лет?')
// const height = prompt('Какой у вас рост?')
// const weight = prompt('Какой у вас вес?')
// const hairColor = prompt('Какой у вас цвет волос?')

// if (gender === 'Женщина' && age >= 20 && height >= 175 && weight <= 60 && hairColor === 'Коричневый') {
//     console.log('Поздравляю, вы модель!!!')
// }
// else {
//     console.log('Вы не модель!')
// }


// ЗАДАЧА 1

// Запросите у пользователя его имя.
// Выведите в окошке (с помощью функции alert)
// фразу: Привет, Николай! (вместо Николай должно
//     показываться имя, которое ввел пользователь)

// const name = prompt('Введите ваше имя:')
// // alert('Привет, ' + name + '!')
// alert(`Привет, ${name}!`)

// ЗАДАЧА 2
// Запросите у пользователя число. Затем запросите степень,
// в которую нужно возвести это число. Выведите в консоль 
// результат.

// +"5" => 5
// Number("5") => 5
// const num1 = +prompt('Введите число:')
// const num2 = +prompt('Введите степень:')
// console.log(`Результат: ${num1 ** num2}`)
// console.log(Math.pow(num1, num2))


// let age = 35
// age = age + 1 // 35 + 1 = 36
// age += 1
// age -= 1
// age *= 1
// age /= 1

// age++ // age += 1 -> age = age + 1
// age-- // age -= 1 -> age = age - 1

// age = age + 5
// age += 5


// a = a + 3 
// a += 3


// "my text" -> "some text"
// "some text" -> "another text"
// "fdasfdsfds" -> "some text"
// "f43we6ethdf" -> "some text"


// ЗАДАНИЕ 4
// "5" == 5 -> true
// "5" === 5 -> false

// let text = "some text"
// if (text === "some text") { // "some text" === "some text"
//     text = "another text"
// }
// else {
//     text = "some text"
// }

// console.log(text)

// if () {

// }
// else if() {

// }
// else if() {

// }
// else {

// }

// ЗАДАНИЕ 5
// let num1 = 0
// if(num1 === 0) { 
//     num1 = 1
// }
// else if(num1 < 0) {
//     num1 = "less than zero"
// }
// else if(num1 > 0) {
//     // num1 = num1 * 10
//     num1 *= 10
// }

// console.log(num1)

// const num1 = 5
// if(num1 === 5) { // 5 === 5
//     console.log('Первое условие работает')
// }
// if(num1 > 0) { // 5 > 0
//     console.log('Второе условие работает')
// }
// else {
//     console.log('Третье условие работает')
// }


// ЗАДАНИЕ 6

// const num = +prompt('Введите число:')
// let result

// if(num < 5) { // 5 < 5
//     result = "0"
// }
// else {
//     result = '1'
// }

// console.log(result)


// ЗАДАНИЕ 7
// const num1 = +prompt('Введите первое число:')
// const num2 = +prompt('Введите второе число:')

// if(num1 > num2) { // 4 > 4
//     console.log(`Большее число: ${num1}`)
// }
// else if (num2 > num1) { // 4 > 4
//     console.log(`Большее число: ${num2}`)
// }
// else {
//     console.log('Числа равны')
// }


// %
// ЗАДАНИЕ 8
// const num1 = +prompt('Введите первое число:')
// const num2 = +prompt('Введите второе число:')
// const isMultiple = num1 % num2 === 0 // 4 и 2 -> 4 % 2 = 0

// if (isMultiple) {
//     console.log(`Число ${num1} кратная к числу ${num2}`)
// }
// else {
//     console.log(`Число ${num1} не кратная к числу ${num2}`)
// }


// &&
// ЗАДАНИЕ 9
// const mark = +prompt('Введите ваш средний балл:')
// if(mark >= 1 && mark <= 4) {
//     console.log('Двоечник, иди учись!')
// }
// else if (mark >= 5 && mark <= 8) {
//     console.log('Неплохо, но давай еще поднажмем!')
// }
// else if(mark >= 9 && mark <= 10) {
//     console.log('Ого, да ты настоящий отличник!')
// }
// else {
//     console.log('Данные некорректны! Пожалуйста введите число от 0 до 10')
// }

// ЗАДАНИЕ 10
const mark = +prompt('Введите балл за экзамен (от 0 до 100):')
const projectCount = +prompt('Введите количество выполненных проектов (от 0 и больше)')
let result

if(mark >= 90 || projectCount >= 10) {
    result = 100
}
else if(mark >= 75 && projectCount >= 5) {
    result = 90
}
else if(mark >= 50 && projectCount >= 2) {
    result = 75
}
else {
    result = 0
}

console.log('Итоговая оценка: ' + result)
