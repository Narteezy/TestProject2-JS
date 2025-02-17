// const name = prompt('Введите ваше имя:')
// alert(`Привет, ${name}!`)

// const number = +prompt('Введите любое число:')
// const power = +prompt('Введите степень:')
// console.log(number ** power)

// let age = 19
// if(age > 18) {
//    message = 'Добро пожаловать!'
// }
// else {
//    message = 'Вы слишком юны'
// }
// alert(message)

// let country = 'Sweden';
// let access = country == 'Sweden' ? true : false
// console.log(access)

// console.log('Поздравляю с НГ')

// for (let num = 5; num <= 10; num++) {
//    console.log('Позравляю с НГ')
// }

// let num = 10
// for (let i = 0; i < 10; i++) {
// num++
// console.log('num:', num)
// }
// console.log(num)


// for (let i = 0; i < 10; i += 2) {
//    let num = +prompt('Введите число:')
//    console.log(num ===10 ? 'Равно 10' : 'Не равно 10')
// }

// for (let i = 0; i < 3; i++) {
//    alert( `number ${i}!` );
//    }

// let i = 0
// while (i < 3) {
//    alert(`number ${i}!` )
//    i++
// }

// function showPersonInfo (name, age) {
//    console.log(`Имя: ${name}`)
//    console.log(`Возраст: ${age}`)
// }

// showPersonInfo('Гузель', 26)

// function power(num1, num2) {
//    return num1 ** num2
// }

// const result1 = power(4, 2)
// console.log(result1)

function isMultiple(num1, num2) {
   return (num1 % num2 === 0 ? `Число ${num1} кратно к числу ${num2}` : `Число ${num1} не кратно к числу ${num2}`)
}
const res1 = isMultiple (15, 5)
const res2 = isMultiple (9, 5)

console.log(res1)
console.log(res2)