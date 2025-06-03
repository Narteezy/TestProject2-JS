
//ТЕРНАРНЫЙ ОПЕРАТОР
// const money = +prompt('Сколько у вас на данный момент денег?')
// const phonePrice = 300000

// if (money < phonePrice) {
//     console.log('Недостаточно средств для покупки телефона')
// }
// else {
//     console.log('Хватает средств для покупки')
// }

// (money > phonePrice) ? console.log('Недостаточно средств для покупки телефона') : console.log('Хватает средств для покупки')
// console.log(money > phonePrice ? 'Недостаточно средств для покупки телефона' : 'Хватает средств для покупки')

// let age = 19;
// let message  = age > 18 ? "Добро пожаловать!" : "Вы слишком юны";
// if(age > 18) {
//     message = 'Добро пожаловать!'
// }
// else {
//     message = 'Вы слишком юны'
// }
// alert(message); 


// ЗАДАНИЕ 1
// Перепишите код с использованием тернарного оператора

// let country = 'Sweden';
// let access;
// if (country == 'Sweden') {
// access = true;
// } else{
// access = false;
// }

// let country = 'Sweden'
// let access = country === 'Sweden' ? true : false

// let country = 'Sweden'
// let access
// (country === 'Sweden') ? access = true : access = false


// ЦИКЛЫ
// DRY - Dont Repeat Yourself
// console.log('Поздравляю с Новым Годом!')


// FOR,WHILE,FOR WHILE

// FOR
// let num = 10
// for (let i = 0; i < 100; i++) { // i - iteration
//     let num = 10
//     num++
//     console.log(num)
// }


// ЗАДАНИЕ 2
// let num = 44
// for(let i = 0; i < 10; i++) {
//     num++
//     console.log('num:', num)
// }
// console.log(num)

// ЗАДАНИЕ 3
// 0 2 4 6 8

// for (let i = 0; i <= 8; i+=2) {
//     const num = +prompt('Введите число:')
//     // if(num === 10) {
//     //     console.log('Равно 10')
//     // }
//     // else {
//     //     console.log('Не равно 10')
//     // }
//     console.log(num === 10 ? 'Равно 10' : 'Не равно 10')
// }


// while
// let i = 0
// while (i < 10) {
//     console.log('Привет')
//     i++
// }

// while (true)


// do while
// let i = 10
// do {
//     console.log('Привет')
//     i++
// } while (i < 10)


// FUNCTION

// const name = "Olzhas"
// const age = 21
// const height = 187
// const gender = 'male'
// const isMarried = false

// console.log(`Имя: ${name}`)
// console.log(`Возраст: ${age}`)
// console.log(`Рост: ${height}`)
// console.log(`Пол: ${gender === 'male' ? 'мужчина' : 'женщина'}`)
// if(gender === 'male') {
//     console.log(isMarried ? 'Женат' : 'Не женат')
// }
// else {
//     console.log(isMarried ? 'Замужем' : 'Не замужем')
// }

// const name2 = "Рабия"
// const age2 = 21
// const height2 = 175
// const gender2 = 'female'
// const isMarried2 = false

// console.log(`Имя: ${name2}`)
// console.log(`Возраст: ${age2}`)
// console.log(`Рост: ${height2}`)
// console.log(`Пол: ${gender2 === 'male' ? 'мужчина' : 'женщина'}`)
// if(gender2 === 'male') {
//     console.log(isMarried2 ? 'Женат' : 'Не женат')
// }
// else {
//     console.log(isMarried2 ? 'Замужем' : 'Не замужем')
// }


// function showPersonInfo(name, age, height, gender, isMarried) {
//     console.log(`Имя: ${name}`)
//     console.log(`Возраст: ${age}`)
//     console.log(`Рост: ${height}`)
//     console.log(`Пол: ${gender === 'male' ? 'мужчина' : 'женщина'}`)
//     if(gender === 'male') {
//         console.log(isMarried ? 'Женат' : 'Не женат')
//     }
//     else {
//         console.log(isMarried ? 'Замужем' : 'Не замужем')
//     }
// }

// showPersonInfo('Гузель', 26, 170, 'female', false)
// console.log('---------------')
// showPersonInfo('Олжас', 21, 187, 'male', false)


// const showPersonInfo = () => {
//     console.log('Функция работает')
// }

// showPersonInfo = 10
// showPersonInfo()


// function power(num1, num2) {
//     const res = num1 ** num2
//     return res
// }

// const result1 = power(4, 2) // result1 = 16
// const result2 = power(4, 3)

// console.log(result1)
// console.log(result2)


// ЗАДАНИЕ ОТ ОЛЖАСА
// Создайте функцию которая проверяте число на кратность
// принимает 2 параметра - первое число, второе число

// function isMultiple(num1, num2) {
//     if(num1 % num2 === 0) {
//         console.log(`Число ${num1} кратно к числу ${num2}`)
//     }
//     else {
//         console.log(`Число ${num1} не кратно к числу ${num2}`)
//     }
// }

// isMultiple(4, 2)
// isMultiple(10, 6)

// function isMultiple(num1, num2) {
//     console.log(num1 % num2 === 0 ? `Число ${num1} кратно к числу ${num2}` : `Число ${num1} не кратно к числу ${num2}`)
// }

// isMultiple(4, 2)
// isMultiple(10, 6)


function isMultiple(num1, num2) {
    return (num1 % num2 === 0 ? `Число ${num1} кратно к числу ${num2}` : `Число ${num1} не кратно к числу ${num2}`)
}

const res1 = isMultiple(4, 2)
const res2 = isMultiple(10, 6)

console.log('Ответ: ' + res1)
console.log(res2)
