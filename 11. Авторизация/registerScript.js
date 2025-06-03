const usernameInput = document.getElementById('usernameInput')
const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')
const confirmPasswordInput = document.getElementById('confirmPasswordInput')
const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()

    const username = usernameInput.value
    const email = emailInput.value
    const password = passwordInput.value
    const confirmPassword = confirmPasswordInput.value

    if (!username || !email || !password || !confirmPassword) {
        alert('Please, fill in all fields!')
        return
    }
    if(password !== confirmPassword) {
        alert('Passwords dont match!')
        return
    }

    // const newUser = {
    //     email: email,
    //     username: username,
    //     password: password
    // }

    const newUser = {
        email,
        username,
        password
    }

    let oldUsers = JSON.parse(localStorage.getItem('users'))

    if(oldUsers) {
        if(oldUsers.find(user => user.email === newUser.email)) {
            alert('User with this email is already exists!')
            return
        }
        oldUsers.push(newUser)
    }
    else {
        oldUsers = [newUser]
    }

    localStorage.setItem('users', JSON.stringify(oldUsers))

    document.location.href = './login.html'
})