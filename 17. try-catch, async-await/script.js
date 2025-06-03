// XMLHttpRequest
// const httpRequest = new XMLHttpRequest()
// httpRequest.open('GET', 'https://jsonplaceholder.org/posts')
// httpRequest.send()
// httpRequest.onload = requestOnload
// httpRequest.onerror = requestOnError

// function requestOnload() {
//     const data = JSON.parse(httpRequest.response)
//     console.log(data)
// }

// function requestOnError() {
//     console.log('Error')
// }

// Fetch
// fetch('https://jsonplaceholder.org/posts')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     const firstPost = data[0]
//     fetch(`https://jsonplaceholder.org/posts/${firstPost.id}`)
//     .then(response => response.json())
//     .then((data2) => {
//         console.log(data2)
//         fetch()
//         .then(() => {

//         })
//         .then(() => {

//         })
//     })

//     console.log(data2)
// })
// .catch((err) => {
//     console.log(err)
// })

// async/await как решение callback-hell

// const fetchPosts = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.org/posts')
//         const data = await response.json()

//         const firstPost = data[0]

//         const response2 = await fetch(`https://jsonplaceholder.org/posts/${firstPost.id}`)
//         const data2 = await response2.json()

//         console.log(data2)
//     }
//     catch(error) {
//         console.log(error)
//     }
//     finally {
//         console.log('FINALLY')
//     }
// }

// console.log('ПРИВЕТ')
// fetchPosts()
// console.log('Пока')

// try {
//     const data = JSON.parse(
//         `{
//             name": "Olzhas"
//         }`
//     )

//     console.log(data)
// }
// catch(err) {
//     console.log(err)
//     console.log('Ошибка JSON parse')
// }


// ЗАДАНИЕ 2
const userList = document.getElementById('userList')

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.org/users')
        const users = await response.json()

        users.forEach(user => {
            const newBoldTag = document.createElement('b')
            const newLITag = document.createElement('li')
            newLITag.innerText = user.firstname
            newLITag.classList.add('liClass')

            newBoldTag.appendChild(newLITag)
            userList.appendChild(newBoldTag)
        })

        let liTags = ''
        users.forEach(user => {
            liTags += `<b><li class="liClass">${user.firstname}</li></b>`
        }) 
        userList.innerHTML = liTags
    }
    catch(err) {
        console.log(err)
    }
}

fetchUsers()