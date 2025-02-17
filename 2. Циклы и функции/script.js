// const money = +prompt('Сколько у вас на данный момент денег?')
// const phonePrice = 300000

// if (money < phonePrice) {
//    console.log('Недостаточно средств для покупки телефона')
// }
// else {
//    console.log('Хватает средств для покупки')
// }
// (money < phonePrice) ? console.log('Недостаточно средств для покупки телефона') : console.log('Хватает средств для покупки')
// console.log(money < phonePrice ? 'Недостаточно средств для покупки телефона' : 'Хватает средств для покупки')

// let country = 'Sweden';
// let access = (country === 'Sweden') ? true : false

// ЦИКЛЫ
// DRY - DONT REPEAT YOURSELF

// console.log('Поздравляю с Новым Годом!')

// // FOR, WHILE, FOR WHILE

// for (let num = 0; num < 10; num++) {
//    console.log('Поздравляю с Новым Годом!')
// }

// let num = 20;
// for (let i = 0; i < 10; i++) {
//    num++
//    console.log('num:', num)
// }
// console.log(num)


// for(let i = 0; i <= 8; i += 2) {
//    const num = +prompt('Введите число:')
//    console.log(num === 10 ? 'Равно 10' : 'Не равно 10')
// }


// let i = 0
// while (i < 10) {
//    console.log ('Привет')
//    i++
// }

// for (let i = 0; i < 3; i++) {
//    alert( `number ${i}!` );
//    }


// let i = 0;
// while (i < 3) {
//    alert( `number ${i}!` )
//    i++
// }

// let i = 10;
// do {
//    console.log('Привет')
//    i++
// } while (i < 10)

// const name = 'Narteezy'
// const age = 29
// const height = 180
// const gender = 'male'
// const isMarried = true

// console.log(`Имя: ${name}`)
// console.log(`Возраст: ${age}`)
// console.log(`Рост: ${height}`)
// console.log(`Пол: ${gender === 'male' ? 'мужчина' : 'женщина'}`)
// if(gender === 'male') {
//    console.log(isMarried ? 'Женат' : 'Холост')
//    }
// else {
//       console.log(isMarried ? 'Замужем' : 'Незамужем')
//    }

//    const name2 = 'Helena'
//    const age2 = 29
//    const height2 = 180
//    const gender2 = 'male'
//    const isMarried2 = true

// const showPersonInfo = () => {    -- аналог написания функции
//    console.log('Функция работает')
// }
// showPersonInfo()

// function showPersonInfo(name, age, height, gender) {
//    console.log(`Имя: ${name}`)
//    console.log(`Возраст: ${age}`)
//    console.log(`Рост: ${height}`)
//    console.log(`Пол: ${gender}`)
// }

// showPersonInfo('Гузель', 26, 175, 'Замужем')
// console.log('-----------------')
// showPersonInfo('Сакен', 27, 180, 'Холост')

// function power(num1, num2) {
//    return num1 ** num2
// }

// const result1 = power(4, 2)

// console.log(result1)


function isMultiple(num1, num2) {
   return (num1 % num2 ? `Число ${num1} не кратно к числу ${num2}` : `Число ${num1} кратно к числу ${num2}`)
}
const res1 = isMultiple (10, 5)
const res2 = isMultiple (9, 5)

console.log(res1)
console.log(res2)