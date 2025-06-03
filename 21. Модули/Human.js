export class Human {
    constructor(name) {
        this.name = name
    }

    getInfo() {
        console.log(`Name is: ${this.name}`)
    }
}

export function sayHello() {
    console.log('Hello')
}

// export number
// export function sayHello() {}

// module:
// {
//     Human,
//     sayHello
// }