// function sayHello() {
//     console.log('Hello!')
// }

// const sayHello = function() {
//     console.log('Hello!')
// }

// const sayHello = () => {
//     console.log('Hello!')
// }

// sayHello()


// ЗАДАНИЕ 1

// function sum(num1, num2) {
//     if(arguments.length !== 2) {
//         console.log('введите два параметра')
//     }
//     else if(typeof num1 !== 'number' || typeof num2 !== 'number') {
//         console.log('введенные данные не являются числами')
//     }
//     else {
//         console.log(num1 + num2);
//     }
// }

// sum()

// ЗАДАНИЕ 2

// function square(a) {
//     // if(typeof a === 'undefined') {
//     //     console.error('Функция "square" не может быть вызвана без аргумента')
//     // }
//     if(arguments.length !== 1) {
//         console.error('Функция "square" не может быть вызвана без аргумента')
//     }
//     else {
//         console.log(a * a)
//     }
// }

// square()

// function quessNumber(num1) {
//     const min = 1;
//     const max = 10;
//     const num2 = Math.floor(Math.random() * (max - min + 1)) + min;

//     console.log(num2)

//     if( num1 == num2 ) {
//         console.log("Выигрыш")
//     }
//     else{
//         console.error("Проигрыш")
//     }
// }

// quessNumber()
// quessNumber()


// for (let i = 0; i < 10; i++) {

// }

// for (const element of object) {
    
// }

// for (const key in object) {
    
// }

// while () {

// }

// for (let i = 0; i < 5; i++) {
//     if(i === 2) {
//         break;
//     }
//     console.log(i)
// }

// FOR EACH
// const numbers = [2, 5, -43, -7, 31, -9, 7]
// numbers.forEach((value, index, array) => {
//     // if(index === 2) {
//     //     break;
//     // }; // нельзя остановить!
//     console.log(value)
// })

// numbers.forEach(function(value, index, array) {
//     console.log(value)
// })

// const numbersClone = numbers.map((value) => {
//     return value
// })

// Задание: Создать копию массивы но вместо отрицательных чисел должен быть null
//[2, 5, null, null, 31, null, 7]

// console.log(numbers)
// console.log(numbersClone)


// ЗАДАНИЕ 4

// function copyArr(arr) {
//     return arr.map(value => value)
// }

// function copyArr(arr) {
//     const cloneArr = []
//     arr.forEach(value => {
//         cloneArr.push(value)
//     })
//     return cloneArr
// }

// const cloneArr1 = copyArr([1, 2, 3, 4])
// const cloneArr2 = copyArr([4, 5, 6, 7])

// console.log(cloneArr1)
// console.log(cloneArr2)


// ЗАДАНИЕ 5
// ['Riza', 'Nazgul', 'Indira']
// ['Hello, Riza', 'Hello, Nazgul', 'Hello, Indira']

// const arr = ['beka', 'nurik', 'aruzhan']
// function copyArr(arr) {
//     const newArr = arr.map((value) => "Hello" + value)
//     return newArr
// }


// console.log(copyArr(arr))


// const name = new String('Olzhas')
// console.log(name)
// console.log(name.length)
// console.log(name[1])
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())


// const speciality = 'Frontend Developer'
// console.log(speciality.trim())
// console.log(speciality.includes('a'))
// console.log(speciality.slice(0, 5))
// console.log(speciality.slice(9))

// const arr = [1, 2, 3, 4, 5]

// console.log(arr.slice(0, 2)) // ctrl + c
// console.log(arr.splice(0, 2)) // ctrl + x
// console.log(arr)


// ЗАДАНИЕ 8
// function ucFirst(str) {
//     // const firstLetter = str[0].toUpperCase()
//     // const slicedStr = str.slice(1)
//     // console.log(firstLetter + slicedStr)
//     console.log(str[0].toUpperCase() + str.slice(1))
// }
// ucFirst('frontend')
// ucFirst('backend')
// ucFirst('myFreedom')

// 'hello, badword' // -> badword
// 'hello, BADWORD' // -> BADWORD
// 'hello, BaDwORd'

// 'hello, XXX'
// 'hello, xXx'
// 'hello, XxX'

// ЗАДАНИЕ 9
// function checkSpam(str) {
//     return str.toLowerCase().includes('badword') || str.toLowerCase().includes('xxx')
// }

// console.log(checkSpam('hello, XxX'))

// const fullName = 'Otep Olzhas'
// console.log(fullName.split('')) // ответ -> ['Otep', 'Olzhas']

// const names = ['Riza', 'Indira', 'Akzhan', 'Nazgul']
// console.log(names.join(', ')) // ответ -> 'Riza, Indira, Akzhan, Nazgul'
// console.log(names.reverse()) // только в массивами работает


// ЗАДАНИЕ 10
// function reverseStr(str) {
//     let newStr = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i] // newStr = 'ян' + е
//     }
//     console.log(newStr)
// }

// reverseStr('привет, Женя')

// function reverseStr(str) {
//     console.log(str.split('').reverse().join(''))
// }

// reverseStr('привет, Женя')


// ЗАДАНИЕ 11
// let stations = [

//     'MAN675847583748sjt567654;Manchester Piccadilly',
    
//     'GNF576746573fhdg4737dh4;Greenfield',
    
//     'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    
//     'SYB4f65hf75f736463;Stalybridge',
    
//     'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
    
//     ];
    
// stations.forEach(station => {
//     const code = station.slice(0, 3)
//     const index = station.indexOf(';')
//     const name = station.slice(index + 1)
//     console.log(`${code}: ${name}`)
// })

// stations.forEach(station => {
//     const code = station.slice(0, 3)
//     const name = station.split(';')[1]
//     console.log(`${code}: ${name}`)
// })


// ЗАДАНИЕ 12

// const strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"]

// function unique(arr) {
//     const newArr = []
//     arr.forEach(element => {
//         if (!newArr.includes(element)) {
//             newArr.push(element)
//         }
//     })

//     return newArr
// }

// console.log(unique(strings))


// filter
// const prices = [250000, 300000, 120000, 500000]
// const newPrices = []
// prices.forEach(price => {
//     if (price >= 300000) {
//         newPrices.push(price)
//     }
// })

// const newPrices = prices.filter((price) => price >= 300000)
// console.log(newPrices)


// ЗАДАНИЕ 14
// let arr = [5, 4, 3, 8, 0]

// function filterFor(arr, a) {
//     return arr.filter(el => el >= a)
// }

// console.log(filterFor(arr, 5))
// console.log(filterFor(arr, 10))
// console.log(filterFor(arr, 3.11))


// ЗАДАНИЕ 15
// const arr = ['yes', 'hello', 'no', 'easycode', 'what']

// function checkArr(arr) {
//     return arr.filter(el => el.length > 3)
// }

// console.log(checkArr(arr))



// SORT
// const items = [
//     { name: "Edward", value: 21 }, // a
//     { name: "Sharpe", value: 37 }, // b
//     { name: "And", value: 45 },
//     { name: "The", value: -12 },
//     { name: "Zeros", value: 37 },
//   ];

//   const sortedItemsByName = items.sort((a, b) => {
//     if (a.name > b.name) {
//       return 1; // +1 index (идет вперед)
//     }
//     if (a.name < b.name) {
//       return -1; // -1 index (идет назад)
//     }
//     // a должно быть равным b
//     return 0; // остается на своем индексе
//   });

  // сортировать по value?
//   const sortedItemsByValue = items.sort((a, b) => {
//     if (a.value > b.value) {
//         return -1
//     }
//     if (a.value < b.value) {
//         return 1
//     }
//     return 0;
//   })

//   console.log(sortedItemsByName)
//   console.log(sortedItemsByValue)

//   let arr =  [ [14, 45], [1], ['a', 'c', 'd'] ]
//   console.log(arr.sort())
  

// ЗАДАНИЕ 16
// const items = [ [14, 45], [23, 64, '34', 43], [1], ['a', 'c', 'd'] ] 

// // const itemsSortedByLength = items.sort((a, b) => {
// //     if (a.length > b.length) {
// //         return -87
// //     }
// //     if (a.length < b.length) {
// //         return 32
// //     }
// //     return 0
// // })

// const itemsSortedByLength = items.sort((a, b) => b.length - a.length) // 2 - 2 = 0

// console.log(itemsSortedByLength)



// REDUCE
// const array = [0, 1, 2, 3, 4]
// accumulator = 2

// let sum = 0
// array.forEach((element) => {
//     sum += element
// })
// console.log(sum)

// const sum = array.reduce((sum, currentValue, index, array) => {
//     return sum + currentValue // 1 + 1 = 2
// }, 0)

// console.log(sum)



// ЗАДАНИЕ 17
// function getAverageHumanAge(catAges) {
//     // [7, 3, 2, 4, 1, 15, 8, 1, 9, 2]
//     const humanAges = catAges.map((age) => (age <= 2) ? age * 10 : age * 7)
//     const filteredHumanAges = humanAges.filter(age => age > 18)
//     const sumAges = filteredHumanAges.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue
//     }, 0)
//     const averageAge = sumAges / filteredHumanAges.length

//     console.log(humanAges)
//     console.log(filteredHumanAges)
//     console.log(sumAges)
//     console.log(averageAge)

//     return averageAge
// }

// function getAverageHumanAge(catAges) {
//     const humanAges = catAges.map((age) => (age <= 2) ? age * 10 : age * 7)
//     const filteredHumanAges = humanAges.filter(age => age > 18)
//     const sumAges = filteredHumanAges.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue
//     }, 0)
//     const averageAge = sumAges / filteredHumanAges.length

//     return averageAge
// }

// getAverageHumanAge([7, 3, 2, 4, 1, 15, 8, 1, 9, 2])


// function getHumanAge(catAges) {
//     let result = catAges.reduce(function(acc, catAge) {
//         let humanAge = 0;
        
//         if (catAge <= 2) {
//             humanAge = catAge * 10;
//         } else {
//             humanAge = catAge * 7;
//         }
//         if (humanAge >= 18) {
//             acc.sum = acc.sum + humanAge;
//             acc.count = acc.count + 1;
//         }
//         return acc; // ничего не трогаем
//     }, {
//         sum: 0,
//         count: 0
//     });
//     if (result.count === 0) {
//         return 0;
//     }
//     return result.sum / result.count;
// }
// const test1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
// const test2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];
// console.log(getHumanAge(test1));
// console.log(getHumanAge(test2));
