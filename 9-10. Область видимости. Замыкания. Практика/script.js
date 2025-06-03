// var name
// function sayHello

// var VS let

// 1. HOISTING

// VAR -> hoisting (всплытие)
// console.log(name)
// var name = 'Akzhan'

// LET и CONST -> hoisting не работает
// console.log(name)
// let name = 'Omar'

// 2. SCOPING - область видимости
// block scoped

// function someFunction() { // блок
//     if (a > 3) { // блок
//         for (let i = 0; i< 4; i++) { // блок
//             numbers.forEach(() => { // блок
    
//             })
//         }
//     }
// }

// VAR - область видимости

// function sayHello() {
//     var message = 'Hello, students!'
// } // все норм

// if(true) {
//     var message = 'hello'
// } // переменная доступна за пределами блока if

// for(let i = 0; i < 1; i++) {
//     var message2 = 'hello2'

//     if(true) {
//         var message3 = 'hello3'
//     }
// } // переменная доступна за пределами блока for

// console.log(message)
// console.log(message2)
// console.log(message3)


// LET или CONST

// function sayHello() {
//     let message = 'Hello, students!'
// } // все норм

// console.log(message)

// if(true) {
//     let message = 'hello'
// } // переменная не доступна за пределами блока if

// for(let i = 0; i < 1; i++) {
//     let message2 = 'hello2'

//     if(true) {
//         let message3 = 'hello3'
//     }
// } // переменная не доступна за пределами блока for

// console.log(message)
// console.log(message2)
// console.log(message3)


// LET и CONST - block scoped
// const student = 'Rabiga'
// console.log(student)

// if(true) {
//     const student = 'Nazgul'
//     console.log(student)

//     if (true) {
//         const student = 'Moldir'
//         console.log(student)
//     }
// }


// Замыкания
// const count = 5

// // makeCounter - функция фабрика - factory function
// function makeCounter() { // ЗАМЫКАНИЕ
//     let count = 0;

//     return function() {
//         count++
//         return count;
//     }
// }

// const newMakeCounter = makeCounter()
// console.log(newMakeCounter())
// console.log(newMakeCounter())
// console.log(newMakeCounter())
// console.log(newMakeCounter())


// ЗАДАНИЕ 1
const inputTag = document.getElementById('inputTag')
const addBtn = document.getElementById('addBtn')
const list = document.getElementById('list')
const listFinished = document.getElementById('listFinished')

const liTemplate = document.getElementById('liTemplate') // темплейт

// первоначальная выгрузка данных
addTaskFromLocalStorage()

inputTag.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask()
    }
})

addBtn.addEventListener('click', () => {
    addTask()
})

function addTaskFromLocalStorage() {

    // выгрузка данных из localStorage
    const oldLocalTasks = JSON.parse(localStorage.getItem('tasks'))

    if(oldLocalTasks) {
        oldLocalTasks.forEach(task => {
            createNewTask(task.name, task.id)
        })
    }
}

function addTask() {
    if(inputTag.value.trim() === '') {
        alert('Please fill task name!')
        return
    }

    const newLocalStorageTask = {
        id: Date.now(),
        name: inputTag.value,
        status: 'inProgress'
    }

    let oldLocalTasks = JSON.parse(localStorage.getItem('tasks'))
    if (oldLocalTasks === null) {
        oldLocalTasks = [newLocalStorageTask]
    }
    else {
        oldLocalTasks.push(newLocalStorageTask)
    }
    localStorage.setItem('tasks', JSON.stringify(oldLocalTasks))

    createNewTask(inputTag.value, newLocalStorageTask.id)
    
    inputTag.value = ''
}

function createNewTask(taskName, taskId) {
    const newLiTagClone = liTemplate.content.cloneNode(true) // временный клон на основе шаблона
    const newLiTag = newLiTagClone.getElementById('liTag') // нормальный тэг

    // это label
    const taskLabel = newLiTagClone.getElementById('taskLabel')
    taskLabel.innerText = taskName
    
    // это галочка
    const taskCheckbox = newLiTagClone.getElementById('taskCheckbox')
    taskCheckbox.addEventListener('click', () => {
        newLiTag.classList.toggle('list-group-item-success')
        if(newLiTag.classList.contains('list-group-item-success')) {
            listFinished.appendChild(newLiTag)
        }
        else {
            list.appendChild(newLiTag)
        }
    })

    // это кнопка для удаления
    const taskDeleteBtn = newLiTagClone.getElementById('taskDeleteBtn')
    taskDeleteBtn.addEventListener('click', () => {
        newLiTag.remove()
        deleteTaskFromLocalStorage(taskId)
    })

    list.appendChild(newLiTag)
}

function deleteTaskFromLocalStorage(taskId) {
    const oldLocalTasks = JSON.parse(localStorage.getItem('tasks'))
    
    if(oldLocalTasks) {
        const updatedLocalTasks = oldLocalTasks.filter(task => task.id !== taskId)
        localStorage.setItem('tasks', JSON.stringify(updatedLocalTasks))
    }
}

// const liTemplate = document.getElementById('liTemplate')
// const newLiTag = liTemplate.content.cloneNode(true)
// const newLiTag2 = liTemplate.content.cloneNode(true)
// const newLiTag3 = liTemplate.content.cloneNode(true)
// list.appendChild(newLiTag)
// list.appendChild(newLiTag2)
// list.appendChild(newLiTag3)
