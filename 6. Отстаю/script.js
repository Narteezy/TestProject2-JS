// Создание DOM
// const h1Tag = document.createElement('h1')
// h1Tag.innerText = 'MyFreedom'
// h1Tag.style.color = 'blue'
// console.log(h1Tag)
// document.body.appendChild(h1Tag)

// const container = document.querySelector('#container')
// const aTag = document.createElement('a')
// aTag.innerText = 'Ссылка'
// aTag.style.textDecoration = 'none'
// aTag.href = 'https://google.com'
// console.log(aTag)
// container.appendChild(aTag) // добавить один элемент

// const liTags = []
// for(let i = 0; i < 5; i++) {
//    const liTag = document.createElement('li')
//    liTag.innerText = `Элемент ${i}`
//    liTags.push(liTag)
// }
// console.log(liTags)
// container.append(...liTags) // добавить несколько элементов
// // li, li, li, li, li -> spread оператор

// // Создать с помощью js абзац (тег p). 
// // Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

// // Задание 4
// // Создать с помощью js абзац (тег p). Добавить в него контент. 
// // Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

// const container_p = document.querySelector('#container_p')
// const pTag = document.createElement('p')
// pTag.innerText = 'Olzhas krasavchik lev'
// pTag.style.fontSize = '36px'
// pTag.style.fontWeight = 'bold'
// console.log(pTag)
// container_p.appendChild(pTag)

// Задание 5
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. 
// Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. 
// Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

// function tagCreator(tagName, color, content) {
//    const newTag = document.createElement(tagName)
//    newTag.innerHTML = content
//    newTag.style.color = color

//    return newTag
// }

// const h1Tag = tagCreator('h1', 'green', 'Hello!!!')
// const pTag = tagCreator('p', 'yellow', 'World!!!')
// const ulTag = tagCreator('ul', 'red', '<li>Privet Mir!!!</li>')

// document.body.append(h1Tag, pTag, ulTag)

// Задание 6
// Вставить в страницу (в html документ) тег <select>. 
// С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

// const select = document.querySelector('#select')

// for(let i = 1960; i <= 2020; i++) {
//    const option = document.createElement('option')
//    option.innerText = `${i}`
//    select.appendChild(option)
// }

// document.body.appendChild(select)

// Задание 7

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]

// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом

// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), 
// статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

// const clients = [
//    {name: "Женя", order: true},
//    {name: "Кристина", order: true},
//    {name: "Павел", order: false},
//    {name: "Виолетта", order: false},
//    {name: "Костя", order: true}
//    ]
// const ulTag = document.createElement('ul')
// for (const client of clients) {
//    const liTag = document.createElement('li')
//    liTag.innerText = `Клиент ${client.name} ${client.order ? 'оплатил' : 'отменил'} заказ`
//    ulTag.appendChild(liTag)
// }
// document.body.appendChild(ulTag)

// Задание 8
// Есть массив ссылок:

// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/']

// const divTag = document.createElement('div')
// divTag.style.backgroundColor = '#ffcec3'
// divTag.style.padding = '20px'

// for (const link of linksArr) {
//    const aTag = document.createElement('a')
//    aTag.href = link
//    aTag.innerText = link
//    aTag.target = '_blank'  // aTag.setAttribute('target', '_blank')
//    aTag.style.display = 'block'
//    divTag.appendChild(aTag)
// }
// document.body.appendChild(divTag)

// // РАБОТА с КЛАССАМИ
// const openBtn = document.querySelector('#openBtn')
// const closeBtn = document.querySelector('#closeBtn')
// const swapBtn = document.querySelector('#swapBtn')
// const list = document.querySelector('#list')
// closeBtn.onclick = () => {
//    list.classList.add('hidden')
// }
// openBtn.onclick = () => {
//    list.classList.remove('hidden')
// }
// swapBtn.onclick = () => {
//    list.classList.toggle('hidden')
// }

// const ulTag = document.querySelector('ul')
// //1
// ulTag.classList.add('list')
// //2
// const liTag = document.querySelectorAll('li')

// for(let i = 0; i < liTags.length; i+=2) {
//    liTags[i].classList.add('item')
// }

// //3
// const aTags = document.querySelectorAll('a')
// for - Добить