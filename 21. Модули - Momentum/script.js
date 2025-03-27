import DateAndTime from './js/dateAndTime.js'
import Greeting from './js/greeting.js'
import Slider from './js/slider.js'

// 1. DateAndTime
const dateAndTime = new DateAndTime()

const timeElement = document.getElementById('time')
timeElement.innerText = dateAndTime.getCurrentTime()
setInterval(() => {
    timeElement.innerText = dateAndTime.getCurrentTime()
}, 1000)

const dateElement = document.getElementById('date')
dateElement.innerText = dateAndTime.getCurrentDate()


// 2. Greeting
const greeting = new Greeting()
const greetingElement = document.getElementById('greeting')
const dayTime = dateAndTime.getCurrentDayTime()
greetingElement.innerText = 'Good ' + dayTime

const usernameInput = document.getElementById('usernameInput')
usernameInput.value = greeting.username // по дефолту берем значение из localStorage
usernameInput.addEventListener('keyup', () => {
    greeting.setUserName(usernameInput.value)
})


// 3. Slider
const slider = new Slider()
document.body.style.backgroundImage = `url("${slider.getRandomImgByDayTime(dayTime)}")`

const slidePrevBtn = document.getElementById('slidePrevBtn')
const slideNextBtn = document.getElementById('slideNextBtn')
slidePrevBtn.addEventListener('click', () => {
    document.body.style.backgroundImage = `url("${slider.getPrevImgByDayTime(dayTime)}")`
})
slideNextBtn.addEventListener('click', () => {
    document.body.style.backgroundImage = `url("${slider.getNextImgByDayTime(dayTime)}")`
})

