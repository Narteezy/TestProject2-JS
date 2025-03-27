//BOM - Browser Object Model
// console.log(location)
// // console.log(location.reload()) // Обновить сайт вручную
// // console.log(location.replace('https://google.com')) //аналог href

// console.log(screen)

//DOM - Document Object Model

//querySelector

// console.log(document)
// const tag1 = document.querySelector('h1')
// const tags = document.querySelectorAll('h1')

// const tag1 = document.querySelector('#tag1')
// const tag2 = document.querySelector('#tag2')
// console.log(tag1)
// console.log(tag2)

//getElementById()
// const tag1 = document.getElementById('tag1')
// console.log(tag1)

// const tags = document.getElementsByClassName('tag')
// console.log(tags)

// const tag1 = document.querySelector('#tag1')
// tag1.innerText = 'MyFreedom'
// tag1.style.color = 'red'
// tag1.style.fontSize = '72px'

// Задание 2
// В файле html есть разметка (добавьте ее в свой файл html):

/*<ul id="list">
<li>Джон</li>
<li>Пит</li>
<li>Джессика</li>
<li>Сара</li>
</ul>*/
// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).
// const listNames = document.querySelector('#list')
// for (let i = 0; i < listNames.children.length; i++) {
//    console.log(listNames.children[i].innerText)
// }

// // // 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
// for (let i = 0; i < listNames.children.length; i++) {
//    listNames.children[i].innerText = i
// }

// const text1 = document.getElementById('text1')
// text1.remove()

// const removeTags = document.querySelectorAll('.forRemove')
// console.log(removeTags)
// for (let i = 0; i < removeTags.length; i++) {
//    removeTags[i].remove()
// }

// const h1Tag = document.createElement('h1')
// console.log(h1Tag)
// h1Tag.innerText = 'Asddsa'
// document.body.appendChild(h1Tag)

// const container = document.querySelector('#container')
// const aTag = document.createElement('a')
// aTag.innerText = 'Ссылка'
// aTag.href = 'https://google.kz'
// console.log(aTag)
// container.appendChild(aTag)

// const liTags = []
// for (let i = 0; i < 5; i++) {
//    const liTag = document.createElement('li')
//    liTag.innerText = `Элемент ${i}`
//    liTags.push(liTag)
// }

// console.log(liTags)
// container.append(...liTags)

const pTag = document.createElement('p')
pTag.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, aperiam!'
pTag.style.fontSize = '36px'
pTag.style.fontWeight = 'bold'
pTag.style.textIndent = '5em'
document.body.appendChild(pTag)