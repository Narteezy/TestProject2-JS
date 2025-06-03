import { Human, sayHello } from './human.js'
import Student, { data as text, sayBye } from './student.js'
// const { Teacher } = require('./teacher.js') // не работает с браузером

const human1 = new Human('Ainagul')
console.log(human1)
human1.getInfo()

sayHello()

const student1 = new Student('Rabiga')
student1.study()
console.log(text)

// const teacher = new Teacher()
// console.log(teacher)

// ES Modules = import/export - работает в браузере и node.js -> ES2015 (ES6)
// Commonjs = require, module.exports - работает в node.js, НЕ работает в браузере