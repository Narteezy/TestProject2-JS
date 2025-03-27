export default class DateAndTime {
    getCurrentTime() {
        const date = new Date()
        const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        
        return `${hours}:${minutes}:${seconds}`
    }

    getCurrentDate() {
        const date = new Date()
        return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    }

    getCurrentDayTime() {
        const date = new Date()
        const hours = date.getHours()

        if(hours >= 6 && hours < 12) {
            return 'morning'
        }
        if(hours >= 12 && hours < 18) {
            return 'day'
        }
        if(hours >= 18 && hours < 24) {
            return 'evening'
        }
        if(hours >= 0 && hours < 6) {
            return 'night'
        }

        return 'day'
    }
}