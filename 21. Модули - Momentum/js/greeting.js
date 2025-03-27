export default class Greeting {
    constructor() {
        this.username = localStorage.getItem('username') || ''
    }

    setUserName(newUsername) {
        if (newUsername) {
            localStorage.setItem('username', newUsername)
            this.username = newUsername
        }
    }
}