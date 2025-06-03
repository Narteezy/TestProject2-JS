export default class Button {
    constructor(id, label, user) {
        this.id = id
        this.label = label
        this.user = user
    }

    onClick() {
        // console.log(this)
        console.log(this.user.name)
    }

    render() {
        const buttonElement = document.createElement('button') // <button></button>
        buttonElement.id = this.id // <button id="id"></button>
        buttonElement.innerText = this.label // <button id="id">text</button>
        buttonElement.addEventListener('click', this.onClick.bind(this)) // прикрепляем this класса а не элемента(тэга) button

        return buttonElement // this
    }
}