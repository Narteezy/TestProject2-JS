// function sayHello() {
//    console.log('Hello!')
// }

// const sayHello = function() {
//    console.log('Hello!')
// }

// // const sayHello = () => {
// //    console.log('Hello!')
// // }
// sayHello ()


// Задание 1

// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра

// function sum(num1, num2) {
//    if(typeof num1 === 'undefined' || typeof num2 === 'undefined') {
//       console.log('введите два параметра')
//    }
//    else if(typeof num1 !== 'number' || typeof num2 !== 'number') {
//       console.log('введенные данные не являются числами')
//    }
//    else {
   
//    console.log(num1 + num2);
// }
// }

// sum(4, 2)
// sum(2)
// sum(4, 's')


// Задание 2
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"

// function square(a) {
//    if(typeof a === 'undefined') {
//       console.error('Функция "square" не может быть вызвана без аргумента')
//    }
//    else {console.log(a * a)}
// }
// square(10) // 100
// square()

// or

// function square(a) {
//       if(arguments.length !== 1) {
//          console.error('Функция "square" не может быть вызвана без аргумента')
//       }
//       else {console.log(a * a)}
//    }
//    square(10) // 100
//    square()

// Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

// function quessNumber(num1) {
// const min = 1;
// const max = 10;
// const num2 = Math.floor(Math.random() * (max - min)) + min;

// if (num1 < 1 || num1 > 10) {
//    console.log('Введито число от 1 до 10')
//    return;
// }
// else if(num1 === num2) {
//    console.log('Вы выиграли')
// }
// else {
//    console.log(`Вы не угадали, ваше число - ${num1},  а выпало число ${num2}`)
// }
// }

// quessNumber(3)

//FOR EACH - только на один массив, нельзя остановить с помощию break
// const numbers = [2, 5, -86, 34, -31, -9]
// numbers.forEach(function(value, index, array) {
//    console.log(value)
// })

// for (i = 0; i < 5; i++) {
//    if(i ===2) {
//       break; // останавливает цикл
//    }
//    console.log(i)
// }

//MAP

// const numbersClone = numbers.map((value, index, array) => {
//    // console.log(value)
//    return value
// })
// console.log(numbers)
// console.log(numbersClone)


// ЗАДАНИЕ: Создать копию массивы но вместо отрицательных чисел должен быть null
// const numbersClone = numbers.map((value, index, array) => {
//    console.log(value)
//    if(value < 0) {
//       return null
//    }
//    return value
//    }
// )
// console.log(numbers)
// console.log(numbersClone)


// Задание 4
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива - forEach или map.

// function copyArr(arr) {
//    return arr.map(value => value)
// }

// const origArray = [2, 5, -86, 34, -31, -9]
// const coppiedArray = copyArr(origArray)

// console.log(origArray)
// console.log(coppiedArray)


// function copyArray(arr) {
//    return arr.map(value => value)
// }

// const cloneArr1 = copyArray([1, 2, 3, 4])
// const cloneArr2 = copyArray([4, 5, 6, 7])

// console.log(cloneArr1)
// console.log(cloneArr2)

// function copyArray(arr) {
//    const cloneArr = []
//    arr.forEach(value => {
//       cloneArr.push(value)
//    })
//    return cloneArr
// }

// const cloneArr1 = copyArray([1, 2, 3, 4])
// const cloneArr2 = copyArray([4, 5, 6, 7])

// console.log(cloneArr1)
// console.log(cloneArr2)

// Задание 5
// Напишите функцию, которая принимает массив имен и возвращает новый массив, в котором каждое имя будет иметь приставку "Hello, "

// function addName(names) {
//    return names.map(value => `Hello, ${value}`)
// }
// const namesArray = ['Nartay', 'Olzhas', 'Bekzhan']
// const addedName = addName(namesArray)

// console.log(addedName)

// Задание 6
// Напишите функцию, которая принимает массив объектов пользователей и возвращает новый массив, содержащий только их имена.

// function addObject(objects) {
//    return objects.map(value => value)
// }
// const Object = ['Nartay', 29, 1995]
// const nameObject = addObject(Object)[0]

// console.log(nameObject)

// Задание 8
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.

// function ucFirst(str) {
//    return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst('nartay'))

// //Задание 9
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.
// function checkSpam(str) {
//    return str.toLowerCase().includes('badword') || str.toLowerCase().includes('xxx')
// }

// console.log(checkSpam('Hello, BadWord xXx'))

//SPLIT, JOIN
// const fullNames = 'Alimkul Nartay, Otep Olzhas' 
// console.log(fullNames.split(', ')) //SPLIT = разделяет на массивы строку

// const names = ['Alimkul', 'Nartay', 'Tazhigaliuly'] 
// console.log(names.join(' ')) //JOIN = объединяет массив в строку (антоним к SPLIT)
// console.log(names.reverse(' ')) //REVERSE = разворачивает строку (работает только с массивами)

// Задание 10
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет, Женя» -> «янеЖ ,тевирп»
// Обратите внимание: метод reverse существует только у массивов.


// function reverseStr(str) {
//    return str.split('').reverse('').join('')
// }
// console.log(reverseStr('привет, Женя'))


// function reverseStr(str) {
//    const strArray = str.split('');
//    const reversedArray = strArray.reverse('');
//    const reversedStr = reversedArray.join('');

//    return reversedStr
// }

// console.log(reverseStr('привет, Женя'))

// function reverseStr(str) {
//    let newStr = ''
//    for (let i = str.length - 1; i >= 0; i--) {
//       newStr += str[i]; // newStr = цикл добавляем каждую букву с конца
//    }
//    console.log(newStr)
// }
// reverseStr('привет, Женя')

// Задание 11
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 
// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль
// ПОДСКАЗКА:
// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк

let stations = [
   'MAN675847583748sjt567654;Manchester Piccadilly',
   'GNF576746573fhdg4737dh4;Greenfield',
   'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
   'SYB4f65hf75f736463;Stalybridge',
   'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
   ];


// function readCodes(stations) {
//    stations.forEach(station => {
//       const [fullCode, nameSt] = station.split(';')
//       const codeSt = fullCode.slice(0, 3)
//       console.log(`${codeSt}: ${nameSt}`)
//    });
// }
// readCodes(stations)

// stations.forEach(station => {
//    const code = station.slice(0, 3)
//    const index = station.indexOf(';')
//    const name = station.slice(index + 1)
//    console.log(`${code}: ${name}`)
// })


// Задание 12
// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
// Пример:
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"

// ПОДСКАЗКА
// - создать новый массив
// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные.

// const strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"]
// function unique(arr) {
//    const newArr = []
//    arr.forEach(element => {
//       if (!newArr.includes(element)) {
//          newArr.push(element)
//       }
//    })
//    return newArr
// }
// console.log(unique(strings))


//FILTER - 
// const prices = [250000, 300000, 120000, 500000]
// const newPrices = []
// prices.forEach(price => {
//    if (price >= 300000) {
//       newPrices.push(price)
//    }
// })

// const newPrices = prices.filter(price => price >= 300000)
// console.log(newPrices)

// Задание 14

// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

// function filterFor(arr, a) {
//    return arr.filter(element => element >= a)
// }

// let arr = [5, 4, 3, 8, 0]

// console.log(filterFor(arr, 5))
// console.log(filterFor(arr, 10))
// console.log(filterFor(arr, 3.11))

// Задание 15
// Описать функцию, которая принимает массив строк и возвращает массив, 
// содержащий только строки более 3-х символов. Проверить работу функции на примере:  
// ['yes', 'hello', 'no', 'easycode', 'what'].

// const arr = ['yes', 'hello', 'no', 'easycode', 'what']

// function filterMore3(arr) {
//       return arr.filter(value => value.length > 3)
// }
// console.log(filterMore3(arr))

// const items = [
//    { name: "Edward", value: 21 }, // a
//    { name: "Sharpe", value: 37 }, // b
//    { name: "And", value: 45 },
//    { name: "The", value: -12 },
//    { name: "Zeros", value: 37 },
// ];

// const sortedItemsByName = items.sort((a, b) => {
//    if (a.name > b.name) {
//       return 1;
//    }
//    if (a.name < b.name) {
//       return -1;
//    }
//    return 0
// })

// console.log(sortedItemsByName)

// const sortedItemsByValue = items.sort((a, b) => {
//    if (a.value > b.value) {
//       return 1;
//    }
//    if (a.value < b.value) {
//       return -1;
//    }
//    return 0;
// })

// console.log(sortedItemsByValue)

// Задание 16

// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие 
// массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
// ПОДСКАЗКА. Для правильной сортировки метод sort принимает функцию, параметры 
// которой a и b - это элементы массива. В данной задаче элементы массива, 
// то есть параметры a и b, сами являются массивами и обладают всеми свойствами массивов.


// const arr = [ [14, 45], [1], ['a', 'c', 'd'] ]
// const sortedItemsByValue = arr.sort((a, b) => {
//       if (a.length > b.length) {
//          return 1;
//       }
//       if (a.length < b.length ) {
//          return -1;
//       }
//       return 0;
//    })
//    console.log(sortedItemsByValue)

// const arr = [ [14, 45], [1], ['a', 'c', 'd'] ] 
// const itemsSortedByLength = arr.sort((a, b) => a.length - b.length) //сокращенный способ

// console.log(itemsSortedByLength)