// PROMISE - Обещание
// const promise = new Promise((resolve, reject) => {
//     // resolve('Промис выполнился успешно!')
//     reject('Промис выполнился провально!')
// })

// promise.then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log(error)
// })


// checkRandomNumber(2).then(result => {
//     console.log(result)
// }).catch(error => {
//     console.error(error)
// })

// function checkRandomNumber(num) {
//     const randomNumber = Math.round(Math.random() * 10)
//     console.log(randomNumber)
//     const promise = new Promise((resolve, reject) => {
//         if (num === randomNumber) {
//             resolve('Вы угадали число!')
//         }
//         else {
//             reject('К сожалению вы не смогли угадать число(')
//         }
//     }) 
//     return promise
// }

// iphoneWinner()

// function iphoneWinner() {
//     const elements = ['Монета', 'Ключ', 'Машина']

//     // Рандомное число от 0 до 2
    
//     const promise1 = new Promise((res) => {
//         const randomIndex = Math.round(Math.random() * (elements.length - 1))
//         res(elements[randomIndex])
//     })
//     const promise2 = new Promise((resolve) => {
//         const randomIndex = Math.round(Math.random() * (elements.length - 1))
//         resolve(elements[randomIndex])
//     })
//     const promise3 = new Promise((resolve) => {
//         const randomIndex = Math.round(Math.random() * (elements.length - 1))
//         resolve(elements[randomIndex])
//     })

//     Promise.all([promise1, promise2, promise3]).then((result => {
//         console.log(result[0], result[1], result[2])
//         if (result[0] === result[1] && result[1] === result[2]) {
//             console.log('ВЫ ВЫИГРАЛИ АЙФОН!')
//         }
//         else {
//             console.log('Неудача( Попробуйте еще раз!')
//         }
//     }))
// }


// FETCH
// const httpRequest = new XMLHttpRequest()
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
// httpRequest.send()
// httpRequest.onload = () => {
//     const data = JSON.parse(httpRequest.response)
//     console.log(data)
// }

// const userFetch = fetch('https://jsonplaceholder.typicode.com/tods/1')

// userFetch.then(response => {
//     if(response.status !== 200) {
//         throw('Произошла ошибка!') // тригеерит ошибка (catch)
//     }
//     return response.json()
// }).then(data => {
//     console.log(data)
// }).catch((error) => {
//     console.error(error)
// })


// iphhonWinner()

// function iphhonWinner() {
//     const elements = ['Монета', 'Ключь', 'Машина']
//     const randomIndex = (Math.round(Math.random() * (elements.length - 1)))
//     const promise1 = new Promise((res) => {
//         const randomIndex = (Math.round(Math.random() * (elements.length - 1)))
//         res(elements[randomIndex])
//     })
//     const promise2= new Promise((res) => {
//         const randomIndex = (Math.round(Math.random() * (elements.length - 1)))
//         res(elements[randomIndex])

//     })
//     const promise3 = new Promise((res) => {
//         const randomIndex = (Math.round(Math.random() * (elements.length - 1)))
//         res(elements[randomIndex])

//     })
//     Promise.all([promise1, promise2, promise3]).then(result => {
//         for (let i = 0; i < result.length; i++) {
//             if (result[0] === result[1] && result[1] === result[2]) {
//                 console.log('Победитель', result[i])
//             } else {
//                 console.log('Неудача', result[i])
//             }fafsaf
//         }
//     })
// }

// Promise
// const promise = new Promise((res ,rej) => {
//     res('Промис выполнился удачно!')
//     // rej('Промис выполнился не удачно(')
// })

// console.log(promise)

// promise.then((result) => {
//     console.log(result)
// }).catch(err => {
//     console.error(err)
// }).finally(() => {
//     // Работает при любом исходе
//     console.log('%cПромис выполнился', 'color:rgb(71, 141, 175)')
// })

// console.log('НЕ ПРОМИС. Просто код')


// fetch
// const fetchingPosts = fetch('https://jsonplaceholder.org/posts')
// fetchingPosts.then(response => {
//     return response.json()
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// }).finally(() => {
    
// })


// ЗАДАНИЕ от Олжас
// Есть поле с названием (ID пользователя). При вводе айди пользователя
// и после нажатия на кнопку Search, нужно отправляеть запрос по
// роуту 'https://jsonplaceholder.org/users/3' - вместо 3 нужно вставить 
// ID который написано в поле
// Вывести id, Email, firstname, lastname, phone пользователя в HTML

// Используйте fetch()

// РЕШЕНИЕ:
// const searchBtn = document.getElementById('searchBtn')
// const userIdInput = document.getElementById('userIdInput')
// const userInfoContainer = document.getElementById('userInfoContainer')

// searchBtn.addEventListener('click', (event) => {
//     event.preventDefault()
//     const id = userIdInput.value
    
//     // falsy values
//     // ''/""/``
//     // 0
//     // false
//     // null
//     // undefined

//     if(!id) {
//         alert('Please, fill the user ID input!')
//         return
//     }
    
//     fetch(`https://jsonplaceholder.org/users/${id}`)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//         userInfoContainer.innerHTML = `
//         <p>ID: ${data.id}</p>
//         <p>Firstname: ${data.firstname}</p>
//         <p>Lastname: ${data.lastname}</p>
//         <p>Email: ${data.email}</p>
//         <p>Phone: ${data.phone}</p>
//     `
//     })
//     .catch(error => {
//         alert('Error when fetching user!')
//     })

//     userIdInput.value = ''    
// })


