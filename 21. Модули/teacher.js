class Teacher {
    constructor(name, lesson) {
        this.name = name
        this.lesson = lesson
    }
    
    getInfo() {
        console.log(this.name, this.lesson)
    }
}

module.exports = {
    Teacher
}