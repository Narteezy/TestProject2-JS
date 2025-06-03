const ulTag = document.querySelector('ul')
//1
ulTag.classList.add('list')

//2
const liTags = document.querySelectorAll('li')

for(let i = 0; i < liTags.length; i+=2) {
    liTags[i].classList.add('item')
}

//3
const aTags = document.querySelectorAll('a')
for (const aTag of aTags) {
    aTag.classList.add('custom-link')
}