export default class AudioPlayer {
    constructor(allAudio) {
        this.index = 0
        this.allAudio = allAudio || []
        this.currentAudio = new Audio(this.allAudio[this.index]) || null
        this.isPaused = true
    }

    playAudio() {
        this.currentAudio.play()
        this.isPaused = false
    }

    pauseAudio() {
        this.currentAudio.pause()
        this.isPaused = true
    }

    playPrevAudio() {
        this.index-- // -1
        if(this.index < 0) {
            this.index = this.allAudio.length - 1
        }
        this.currentAudio.src = this.allAudio[this.index] // this.allAudio[-1 => 4]
        this.playAudio()
    }
    playNextAudio() {
        this.index++ // -1
        if(this.index > this.allAudio.length - 1) {
            this.index = 0
        }
        this.currentAudio.src = this.allAudio[this.index] // this.allAudio[5 => 0]
        this.playAudio()
    }
}