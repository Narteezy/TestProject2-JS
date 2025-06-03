// const student = {
//     name: 'Nazgul',
//     lesson: 'Frontend'
// }

// console.log(student.lesson)
// console.log(student['lesson'])


// Диструктуризация
// let {name: firstName, lesson} = student

// firstName = 'Galymzhan'
// console.log(firstName)
// console.log(lesson)


// НЮАНС
// Клонировать обьект через диструктуризацию опасно
// const employee = {
//     firstName: 'Olzhas',
//     lastName: 'Otep',
//     address: {
//         country: 'Kazakhstan',
//         city: 'Astana',
//     }
// }

// // console.log(employee.address.city)
// const {address, firstName, lastName} = employee

// address.city = 'Aktau'

// console.log(address)
// console.log(employee)

// Безопасное клонирование
// const employeeJson = JSON.stringify(employee)
// const employeeClone = JSON.parse(employeeJson)


// Диструктуризация массива
// const names = ['Nazgul', 'Guzel', 'Indira']
// const [name1, name2, name3] = names

// console.log(name1)

// НЮАНС
// const students = [
//     {
//         name: 'Rabiga',
//         lesson: 'Frontend'
//     },
//     {
//         name: 'Nartai',
//         lesson: 'Frontend'
//     },
//     {
//         name: 'Akzhan',
//         lesson: 'Frontend'
//     }
// ]

// const [student1, student2, student3] = students

// student1.lesson = 'Backend'

// console.log(students)
// console.log(student1)


// SPREAD
// function sumNumbers(num1, num2, num3) {
//     return num1 + num2 + num3
// }

// const numbers1 = [5, 4, 8]
// console.log(sumNumbers(...numbers1)) // ...[5, 4, 8] => 5, 4, 8

// const numbers1 = [43, 54, 78]
// // const numbersClone = numbers1.map(num => num)
// const numbersClone = [...numbers1] // [...[43, 54, 78]] -> [43, 54, 78]

// console.log(numbers1)
// console.log(numbersClone)

// SPREAD с обьектами
// const student = {
//     name: 'Nazgul',
//     lesson: 'Frontend'
// }

// const studentClone = {...student}

// console.log(student)
// console.log(studentClone)


// SPREAD c текстом
// const text = 'Frontend'
// // const textArray = text.split('')
// const textArray = [...text]
// console.log(textArray)


// Spread + диструктуризация
// const names = ['Indira', 'Galymzhan', 'Akzhan', 'Nazgul']

// const [name1, ...otherNames] = names

// // const name1 = names.slice(0, 1)[0]
// // const otherNames = names.slice(1)

// console.log(name1)
// console.log(otherNames)


// ЗАДАНИЕ 1
// const names = ['Indira', 'Galymzhan', 'Akzhan', 'Nazgul']
// const [name1, name2, ...otherNames] = names

// console.log(name1)
// console.log(name2)

// otherNames.forEach(name => {
//     console.log(name)
// })


// ЗАДАНИЕ 2
// const names = ['Indira', 'Galymzhan', 'Akzhan', 'Nazgul']

// function logNames(name1, name2, name3) {
//     console.log(name1)
//     console.log(name2)
//     console.log(name3)
// }

// // logNames(names[0], names[1], names[2])
// logNames(...names)


// Spread + диструктуризация с обьектами
// const employee = {
//     firstName: 'Olzhas',
//     lastName: 'Otep',
//     address: {
//         country: 'Kazakhstan',
//         city: 'Astana',
//     },
// }

// // const {firstName, ...otherFields} = employee

// // console.log(firstName)
// // console.log(otherFields)

// // const employeeClone = {...employee, age: 21}
// const employeeClone = {...employee, lastName: 'Otepov', age: 21}

// console.log(employee)
// console.log(employeeClone)


// ЗАДАНИЕ 3
// const employee = {
//     firstName: 'Olzhas',
//     lastName: 'Otep',
//     address: {
//         country: 'Kazakhstan',
//         city: 'Astana',
//     },
//     age: 21
// }

// const {firstName = 1, lastName = 2, ...fields} = employee

// console.log(firstName, lastName)
// console.log(fields)

//ЗАДАНИЕ 4
//meanScore(3, 4, 7, '9') // 3+4+7+9 / 4 = 5.75. 5.666666 -> 5.67

// function meanScore(...numbers) {
//     for (const num of numbers) {
//         if(typeof num !== 'number') {
//             console.log('Все аргументы в вызове функции должны быть числами!')
//             return
//         }
//     }

//     let sum = 0
//     numbers.forEach(num => {
//         sum += num
//     })

//     const avg = sum / numbers.length
//     return avg.toFixed(2)
// }

// function meanScore(...numbers) {
//     if (numbers.some(num => typeof num !== 'number')) {
//         console.log('Все аргументы в вызове функции должны быть числами!')
//         return
//     }

//     const sum = numbers.reduce((acc, num) => {
//         return acc + num
//     }, 0)

//     const avg = sum / numbers.length
    
//     return avg.toFixed(2)
// }

// console.log(meanScore(3, 4, 5, 1))
// console.log(meanScore(23, 32, 12))
// console.log(meanScore(23, '54'))

// SOME
// const numbers = [1, 2, 3, 4]
// console.log(numbers.some(num => {
//     return num < 0
// }))

//EVERY
// const numbers = [1, 2, 3, 4] // false, true, true, true
// console.log(numbers.every(num => num > 1))
