export default class Slider {
    constructor() {
        this.imgNumber = 1
    }

    getRandomImgByDayTime(dayTime) {
        this.imgNumber = Math.round(Math.random() * 20) // 0 -> 1 / 0 -> 20, но формат = 13.52, 23.6

        if(this.imgNumber === 0) {
            this.imgNumber = 1 // 1
        }

        return this.#getImgUrl(dayTime)
    }

    getNextImgByDayTime(dayTime) {
        this.imgNumber += 1

        if(this.imgNumber > 20) {
            this.imgNumber = 1
        }

        return this.#getImgUrl(dayTime)
    }

    getPrevImgByDayTime(dayTime) {
        this.imgNumber -= 1

        if(this.imgNumber < 1) {
            this.imgNumber = 20
        }

        return this.#getImgUrl(dayTime)
    }

    #getImgUrl(dayTime) {
        if(dayTime === 'day') {
            dayTime = 'afternoon'
        }

        let imgNumberString = this.imgNumber
        if(imgNumberString < 10) {
            imgNumberString = '0' + imgNumberString // '01'
        }

        return `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/${imgNumberString}.jpg`
    }
}