import DateAndTime from './js/dateAndTime.js'
import Greeting from './js/greeting.js'
import Slider from './js/slider.js'
import Weather from './js/weather.js'
import Joke from './js/jokes.js'
import AudioPlayer from './js/audioPlayer.js'

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


// 4. Weather
const weather = new Weather()
const weatherCityInput = document.getElementById('weatherCityInput')
const weatherIcon = document.getElementById('weatherIcon')
const weatherTemp = document.getElementById('weatherTemp')
const weatherName = document.getElementById('weatherName')
const windSpeed = document.getElementById('windSpeed')
const humidity = document.getElementById('humidity')
const weatherError = document.getElementById('weatherError')

weatherCityInput.value = localStorage.getItem('city') || ''
if(weatherCityInput.value) {
    setWeatherDetails()
}

weatherCityInput.addEventListener('blur', async () => { // blur - unfocus
    setWeatherDetails()
})

async function setWeatherDetails() {
    const isSuccess = await weather.fetchWeatherByCity(weatherCityInput.value)
    console.log(weather)
    if(isSuccess) {
        weatherError.innerText = ''
        weatherIcon.src = weather.icon
        weatherTemp.innerText = weather.temp
        weatherName.innerText = weather.weatherName
        windSpeed.innerText = 'Wind speed: ' + weather.windSpeed
        humidity.innerText = 'Humidity: ' + weather.humidity

        localStorage.setItem('city', weatherCityInput.value)
    }
    else {
        weatherIcon.src = ''
        weatherTemp.innerText = ''
        weatherName.innerText = ''
        windSpeed.innerText = ''
        humidity.innerText = ''
        weatherError.innerText = weather.error
    }
}



// 5 JOKES
const joke = new Joke()
const jokeText = document.getElementById('jokeText')
const jokeIcon = document.getElementById('jokeIcon')
const changeJokeBtn = document.getElementById('changeJokeBtn')

changeJokeBtn.addEventListener('click', setRandomJoke)

async function setRandomJoke() {
    const isSuccess = await joke.fetchRandomJoke()
    if(isSuccess) {
        jokeText.innerText = joke.text
        jokeIcon.src = joke.iconUrl
    }
}

setRandomJoke()


// 6 AudioPlayer
const audioPlayer = new AudioPlayer([
    './assets/sounds/Aqua Caelestis.mp3', // 0
    './assets/sounds/River Flows In You.mp3', // 1
    './assets/sounds/Summer Wind.mp3', // 2
    './assets/sounds/Ennio Morricone.mp3', // 3
])

const playPrevBtn = document.getElementById('playPrevBtn')
const playNextBtn = document.getElementById('playNextBtn')
const playBtn = document.getElementById('playBtn')

playBtn.addEventListener('click', () => {
    if(audioPlayer.isPaused) {
        audioPlayer.playAudio()
        playBtn.style.backgroundImage = 'url(./assets/svg/pause.svg)'
    }
    else {
        audioPlayer.pauseAudio()
        playBtn.style.backgroundImage = 'url(./assets/svg/play.svg)'
    }
})

playPrevBtn.addEventListener('click', () => {
    audioPlayer.playPrevAudio()
})

playNextBtn.addEventListener('click', () => {
    audioPlayer.playNextAudio()
})