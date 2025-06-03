// BOM - Browser Object Model

// console.log(location)
// console.log(location.reload()) // Обновить сайт вручную в js
//location.replace('https://google.com') // аналог href ссылки в html

// console.log(navigator)
// navigator.clipboard.writeText('Hello')

// console.log(history)

// console.log(screen)


// DOM - Document Object Model

// получить доступ к HTML тэгам

// querySelector()
// const tag1 = document.querySelector('h1')
// const tag1 = document.querySelector('#tag1')
// const tag2 = document.querySelector('#tag2')
// const tags = document.querySelectorAll('h1')

// console.log(tag1)
// console.log(tag2)
// console.log(tags)


// getElementById()
// const tag1 = document.getElementById('tag1')
// console.log(tag1)

// getElementsByClassName()
// const tags = document.getElementsByClassName('tag')
// console.log(tags)

// getElementsByName()
// const tags = document.getElementsByName('programming_language')
// console.log(tags)

// getElementsByTagName
// const tags = document.getElementsByTagName('input')
// console.log(tags)

// const tag1 = document.querySelector('#tag1')
// tag1.innerText = 'MyFreedom'
// tag1.style.color = 'red'
// tag1.style.fontSize = '15px'

// ЗАДАНИЕ 2

// // 1
// const ulTag = document.querySelector('#list')

// for(let i = 0; i < ulTag.children.length; i++) {
//     console.log(ulTag.children[i].innerText)
// }

// for(let i = 0; i < ulTag.children.length; i++) {
//     ulTag.children[i].innerText = i
// }

// //2
// const allLiTags = document.querySelectorAll('#list li')

// for(let i = 0; i < allLiTags.length; i++) {
//     console.log(allLiTags[i].innerText)
// }

// for(let i = 0; i < allLiTags.length; i++) {
//     allLiTags[i].innerText = i
// }


// remove()
// const text1 = document.getElementById('text1')
// text1.remove()

// const forRemoveTags1 = document.querySelectorAll('.forRemove')
// const forRemoveTags2 = document.getElementsByClassName('forRemove')

// for (const tag of forRemoveTags1) {
//     tag.remove()
// }

// for(let i = 0; i < forRemoveTags1.length; i++) {
//     forRemoveTags1[i].remove()
// }

// forRemoveTags1.forEach(tag => {
//     tag.remove()
// })


// Создание DOM
// const h1Tag = document.createElement('h1')
// h1Tag.innerText = 'MyFreedom'
// h1Tag.style.color = 'blue'
// document.body.appendChild(h1Tag)

// const container = document.querySelector('#container')
// const aTag = document.createElement('a')
// aTag.innerText = 'Ссылка'
// aTag.style.textDecoration = 'none'
// aTag.href = 'https://google.com'
// container.appendChild(aTag) // добавить один элемент


// const liTags = []
// for(let i = 0; i < 5; i++) {
//     const liTag = document.createElement('li')
//     liTag.innerText = `Элемент ${i}`
//     liTags.push(liTag)
// }
// console.log(liTags)
// container.append(...liTags) // добавить несколько элементов
//  // li, li, li, li, li -> spread оператор


// ЗАДАНИЕ 4
// const pTag = document.createElement('p')
// pTag.innerText = 'Some text'
// pTag.style.fontSize = '36px'
// pTag.style.fontWeight = 'bold'
// document.body.appendChild(pTag)

// ЗАДАНИЕ 5
// function tagCreator(tagName, color, content) {
//     const newTag = document.createElement(tagName)
//     newTag.innerHTML = content
//     newTag.style.color = color

//     return newTag
// }

// const h1Tag = tagCreator('h1', 'green', 'Hello!')
// const pTag = tagCreator('p', 'pink', 'Hello, World!')
// const ulTag = tagCreator('ul', 'red', '<li>Olzhas</li><li>Erbol</li>')

// // document.body.appendChild(h1Tag)
// // document.body.appendChild(pTag)
// // document.body.appendChild(ulTag)

// document.body.append(h1Tag, pTag, ulTag)


// innerHTML -> добавить текст и тэги
// innerText -> добавить просто текст

// ЗАДАНИЕ 6
// const selectTag = document.createElement('select')

// for(let i = 1960; i <= 2020; i++) {
//     const optionTag = document.createElement('option')
//     optionTag.innerText = i
//     optionTag.value = i
//     selectTag.appendChild(optionTag)
// }

// document.body.appendChild(selectTag)

// ЗАДАНИЕ 7
// const clients = [
//     {name: "Женя", order: true},
//     {name: "Кристина", order: true},
//     {name: "Павел", order: false},
//     {name: "Виолетта", order: false},
//     {name: "Костя", order: true}
// ]

// const ulTag = document.createElement('ul')

// for (const client of clients) {
//     const liTag = document.createElement('li')
//     liTag.innerText = `Клиент ${client.name} ${client.order ? 'оплатил' : 'отменил'} заказ`
//     ulTag.appendChild(liTag)
// }

// document.body.appendChild(ulTag)


// ЗАДАНИЕ 8
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/']

// const divTag = document.createElement('div')
// divTag.style.backgroundColor = '#ffcec3'
// divTag.style.padding = '20px'

// for (const link of linksArr) {
//     const aTag = document.createElement('a')
//     aTag.href = link
//     aTag.innerText = link
//     aTag.style.display = 'block'
//     // aTag.target = '_blank'
//     aTag.setAttribute('target', '_blank')
//     divTag.appendChild(aTag)
// }

// document.body.appendChild(divTag)


// Работа с классами
// const openBtn = document.querySelector('#openBtn')
// const closeBtn = document.querySelector('#closeBtn')
// const toggleBtn = document.querySelector('#toggleBtn')
// const list = document.querySelector('#list')

// closeBtn.onclick = () => {
//     list.classList.add('hidden')
// }

// openBtn.onclick = () => {
//     list.classList.remove('hidden')
// }

// toggleBtn.onclick = () => {
//     list.classList.toggle('hidden')
//     if(list.classList.contains('hidden')) {
//         toggleBtn.innerText = 'Открыть список'
//     }
//     else {
//         toggleBtn.innerText = 'Закрыть список'
//     }
// }
