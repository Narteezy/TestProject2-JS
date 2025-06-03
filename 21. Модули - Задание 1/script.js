import Button from "./button.js";
import { buttonsData } from './data.js'

const container = document.getElementById('container')

buttonsData.forEach((button) => {
    const newButton = new Button(button.id, button.label, button.user)
    container.appendChild(newButton.render())
})