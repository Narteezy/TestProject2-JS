const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')
const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()

    const email = emailInput.value
    const password = passwordInput.value

    if(!email || !password) {
        alert('Please, fill in all fields!')
        return
    }

    const users = JSON.parse(localStorage.getItem('users'))
    const foundUser = users?.find(user => user.email === email)
    console.log(foundUser)
    if(!foundUser) {
        alert('User with this email is not found!')
        return
    }

    if(foundUser.password !== password) {
        alert('Passwords dont match!')
        return
    }

    alert(`Welcome, ${foundUser.username}!`)
})