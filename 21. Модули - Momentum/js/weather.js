export default class Weather {
    icon = ''
    temp = ''
    weatherName = ''
    windSpeed = ''
    humidity = ''
    error = ''

    async fetchWeatherByCity(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=a94d0a5ac08570add4b47b8da933f247`)
            const data = await response.json()
            if(data?.list?.[0]) {
                const currentWeather = data.list[0]
                this.icon = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`
                this.temp = currentWeather.main.temp + '°C'
                this.weatherName = currentWeather.weather[0].main
                this.windSpeed = currentWeather.wind.speed + ' m/s'
                this.humidity = currentWeather.main.humidity + '%'
                return true
            }
            else {
                this.error = 'Weather of this city is not available!'
                return false
            }
        }
        catch(err) {
            console.log(err)
            return false
        }
    }
}