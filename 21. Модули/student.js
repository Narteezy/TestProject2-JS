import { Human } from "./human.js"

export const data = 'Some data'

export function sayBye() {
    console.log('Bye bye')
}

export default class Student extends Human {
    constructor(name, course) {
        super(name)
        this.course = course
    }

    study() {
        console.log(`Student ${this.name} is learning ${this.course}`)
    }
}