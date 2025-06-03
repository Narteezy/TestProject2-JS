// setTimeout(() => {
//     console.log('Привет')
// }, 0)
// console.log('Пока')


// Синхронный код - выполняется сразу и по порядку (сверху вниз)
// Ассинхронный код - несколько кодов могут выполняться паралельно

// const promise = new Promise((resolve) => {
//     resolve('ПРОМИС')
// }) // 1
// promise.then(value => {
//     console.log(value)
// }) // 4
// console.log('Первый код') // 2
// setTimeout(() => {
//     console.log('ТАЙМАУТ')
// }, 0) // 5
// console.log('Третий код') // 3



// const button = document.getElementById('button')

// // setTimeout
// setTimeout(() => {
//     console.log('Таймаут')
// }, 500)

// // setInterval
// const interval = setInterval(() => {
//     console.log('Интервал')
// }, 500)

// button.addEventListener('click', () => {
//     clearInterval(interval) // остановить интервал
// })



// API - механизм обращения к серверу с правилами
// httpRequest
// const httpRequest = new XMLHttpRequest()

// httpRequest.open('GET', 'https://jsonplaceholder.org/postsaewrw')
// httpRequest.send()
// httpRequest.onload = () => {
//     if(httpRequest.status === 404) {
//         alert('Ошибка запроса!')
//         return
//     }
//     const data = JSON.parse(httpRequest.response) // ответ запроса
//     console.log(data)
//     console.log(httpRequest)
// }

// httpRequest.onerror = () => {
//     alert('Ошибка соединения!')
// }

// Задание 1 

// 1-решение
// for(let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(`Сообщение номер ${i}`)
//     }, i * 2000)
// }

// 2000 = 1 * 2000
// 4000 = 2 * 2000
// 6000 = 3 * 2000
// 8000 = 4 * 2000
// 10000 = 5 * 2000

// 2-решениеfsafasfas
// let num = 1
// const interval = setInterval(() => {
//     if(num === 6) {
//         clearInterval(interval)
//         return
//     }
//     console.log(`Сообщение номер ${num}`)
//     num++
// }, 2000)


// Задание 2
// const clock = document.getElementById('clock')
// setInterval(() => {
//     const date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()

//     if(seconds < 10) {
//         seconds = '0' + seconds
//     }
//     if(minutes < 10) {
//         seconds = '0' + seconds
//     }
//     if(hours < 10) {
//         seconds = '0' + seconds
//     }

//     console.log(`${hours}:${minutes}:${seconds}`)
//     clock.innerText = `${hours}:${minutes}:${seconds}`
// }, 1000)


// ЗАДАНИЕ 3
// const todoTitleDiv = document.getElementById('todoTitleDiv')

// const httpRequest = new XMLHttpRequest()
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
// httpRequest.send();
// httpRequest.onload = () => {
//     const data = JSON.parse(httpRequest.response)
//     todoTitleDiv.innerText = data.title
// }


// ЗАДАНИЕ 4
// const ul = document.createElement('ul')

// const httpRequest = new XMLHttpRequest()
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos')
// httpRequest.send()
// httpRequest.onload = () => {
//     const data = JSON.parse(httpRequest.response)
//     data.slice(0, 20).forEach(todo => {
//         const li = document.createElement('li')
//         li.innerText = todo.title
//         ul.appendChild(li)
//     })

//     document.body.appendChild(ul)
// }


// ЗАДАНИЕ 5

// 1 Отправить запрос
const city = document.getElementById('city')
const currentTime = document.getElementById('currentTime')
const currentWeatherImg = document.getElementById('currentWeatherImg')
const currentWeatherName = document.getElementById('currentWeatherName')
const currentWeatherTemp = document.getElementById('currentWeatherTemp')
const currentWindSpeed = document.getElementById('currentWindSpeed')
const futureWeatherTemplate = document.getElementById('futureWeatherTemplate')
const futureWeatherContainer = document.getElementById('futureWeatherContainer')
const spinner = document.getElementById('spinner')
const toastElement = document.getElementById('toast')
const toastBody = document.getElementById('toastBody')
const citySearchBtn = document.getElementById('citySearchBtn')
const cityNameInput = document.getElementById('cityNameInput')

getUserCurrentCity()

function getUserCurrentCity() {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        const lat = position.coords.latitude
        const lon = position.coords.longitude

        if (lat && lon) {
            const httpRequest = new XMLHttpRequest()
            const apiKey = '438a8270b0c9475c8269e66e9c8ba4a5'
            httpRequest.open('GET', `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${lat}%2C+${lon}`)
            httpRequest.send()
            httpRequest.onload = () => {
                const data = JSON.parse(httpRequest.response)
                const cityName = data.results[0].components.city
                
                fetchWeatherByCity(cityName)
            }
        }
    })
}

citySearchBtn.addEventListener('click', () => {
    fetchWeatherByCity(cityNameInput.value)
})

function fetchWeatherByCity(cityName) {
    // чистка старых данных
    futureWeatherContainer.innerHTML = ''

    const httpRequest = new XMLHttpRequest()
    httpRequest.open('GET', `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=a94d0a5ac08570add4b47b8da933f247`)
    spinner.classList.remove('hidden')
    httpRequest.send()
    httpRequest.onload = () => {
        const data = JSON.parse(httpRequest.response)
        const status = httpRequest.status

        if(status === 200 && data) {
            console.log(data)
            // Город
            city.innerText = data?.city?.name
        
            // Текущее время
            currentTime.innerText = getTimeByOffset(data.city.timezone)
        
            // Иконка текущей погоды
            const iconId = data.list[0].weather[0].icon
            currentWeatherImg.src = `https://openweathermap.org/img/wn/${iconId}@2x.png`
        
            // Название текущей погоды
            currentWeatherName.innerText = data.list[0].weather[0].main
        
            // Температура текущей погоды
            currentWeatherTemp.innerText = Math.round(data.list[0].main.temp) + ' °C'
        
            // Скорость ветра
            currentWindSpeed.innerText = data.list[0].wind.speed + 'm/s'
        
        
            // Прогноз на след дни
            const futureWeatherList = []
            for(let i = 8; i < 40; i+=8) {
                futureWeatherList.push(data.list[i])
            }
            
            futureWeatherList.forEach(weather => {
                const futureWeatherClone = futureWeatherTemplate.content.cloneNode(true)
                const futureWeather = futureWeatherClone.getElementById('futureWeather')
                const futureWeatherDate = futureWeatherClone.getElementById('futureWeatherDate')
                const futureWeatherTime = futureWeatherClone.getElementById('futureWeatherTime')
                const futureWeatherIcon = futureWeatherClone.getElementById('futureWeatherIcon')
                const futureWeatherTemp = futureWeatherClone.getElementById('futureWeatherTemp')
        
                // дата и время будущей погоды
                const dateArray = weather.dt_txt.split(' ')
                futureWeatherDate.innerText = dateArray[0]
                futureWeatherTime.innerText = dateArray[1]
        
                // иконка будущей погоды
                const iconId = weather.weather[0].icon
                futureWeatherIcon.src = `https://openweathermap.org/img/wn/${iconId}@2x.png`
        
                // температура будущей погоды
                futureWeatherTemp.innerText = Math.round(weather.main.temp) + ' °C'
        
                // Добавляем каждый элемент погоды в контейнер
                futureWeatherContainer.appendChild(futureWeather)
            })
        }
        else {
            const toast = new bootstrap.Toast(toastElement)
            if(data?.message) {
                toastBody.innerText = data.message
            }
            toast.show()
        }
        
        spinner.classList.add('hidden')
    }
}


function getTimeByOffset(offsetInSeconds) {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const targetTime = new Date(utcTime + offsetInSeconds * 1000);
    return `${targetTime.getHours()}:${targetTime.getMinutes()}`;
}