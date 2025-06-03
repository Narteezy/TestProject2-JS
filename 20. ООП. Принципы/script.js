// const usdAmount = document.getElementById('usdAmount')
// const currencySelect = document.getElementById('currencySelect')
// const result = document.getElementById('result')

// class Converter {
//     constructor(amount, currency) {
//         this.amount = amount
//         this.currency = currency
//     }

//     setAmount(newAmount) {
//         this.amount = newAmount
//     }

//     setCurrency(newCurrency) {
//         this.currency = newCurrency
//     }

//     async convertUsd() {
//         try {
//             const response = await fetch('https://open.er-api.com/v6/latest/USD')
//             const data = await response.json()
//             console.log(this)
//             console.log(data)
            
//             result.innerText = (this.amount * data.rates[this.currency]) // data.rates.KZT
//         }
//         catch {
//             alert('Error when converting usd!')
//         }
//     }
// }

// const converter = new Converter(0, currencySelect.value)

// usdAmount.addEventListener('keyup', () => {
//     const amount = +usdAmount.value
//     const currency = currencySelect.value

//     converter.setAmount(amount)
//     converter.setCurrency(currency)
//     converter.convertUsd()
// })

// currencySelect.addEventListener('change', () => {
//     const amount = +usdAmount.value
//     const currency = currencySelect.value

//     converter.setAmount(amount)
//     converter.setCurrency(currency)
//     converter.convertUsd()
// })


// SOLID
// Single Responsibility Principle - Принцип одной ответственности
// Делай только то что умеешь и задали

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }

//     calculateArea() {
//         return this.width * this.height
//     }
// }

// class AreaPrinter {
//     print(area) {
//         console.log(`Площадь фигуры: ${area}`)
//     }
// }

// class Circle {
//     constructor(radius) {
//         this.radius = radius
//     }

//     calculateArea() {
//         return 2 * Math.PI * (this.radius ** 2) // 2pr^2
//     }
// }

// const rectangle1 = new Rectangle(100, 200)
// const rectangleArea = rectangle1.calculateArea()

// const areaPrinter = new AreaPrinter()
// areaPrinter.print(rectangleArea)

// const circle1 = new Circle(20)
// const circleArea = circle1.calculateArea()
// areaPrinter.print(circleArea)


// OPEN/CLOSED Principle - Принцип открытости/закрытости
// Делай так чтобы потом не жалеть

// class Payment {
//     constructor(amount) {
//         this.amount = amount
//     }

//     pay() {
//         console.log(`Оплачено: ${this.amount}`)
//     }
// }

// class CardPayment extends Payment {
//     pay() {
//         console.log(`Оплачено картой: ${this.amount}`)
//     }
// }

// class CashPayment extends Payment {
//     pay() {
//         console.log(`Оплачено наличкой: ${this.amount}`)
//     }
// }

// class KaspiRedPayment extends Payment {
//     pay() {
//         console.log(`Оплачено Kaspi RED: ${this.amount}`)
//     }
// }

// const payment1 = new KaspiRedPayment(200000)
// payment1.pay()


// LISKOV SUBSTITUTION PRINCIPLE - Принцип подстановки Лискова
// Айтишник не обязан писать код

// class ITEmployee {
//     constructor(name) {
//         this.name = name
//     }

//     work() {
//         console.log(`${this.name} работает!`)
//     }
// }

// class FrontendDeveloper extends ITEmployee {
//     work() {
//         console.log(`${this.name} пишет frontend часть!`)
//     }
// }

// class BackendDeveloper extends ITEmployee {
//     work() {
//         console.log(`${this.name} пишет backend часть!`)
//     }
// }

// class ProjectManager extends ITEmployee {
//     work() {
//         console.log(`${this.name} пишет задачи!`)
//     }
// }


// INTERFACE SEGREGATION PRINCIPLE - Прицнип разделение интерфейсов
// class Bird {
//     fly() {
//         console.log('Я летаю')
//     }
//     swim() {
//         console.log('Я плаваю')
//     }
// }

// class Duck extends Bird {

// }

// class Pinguin extends Bird {

// }


// DEPENDENCY INVERSION - Прицнип инверсии зависимостей
// классы должны зависеть от абстракций, а не от конкретных деталей
// Я не буду привязывать только к React-у

class User {
    constructor(name) {
        this.name = name
    }
}

class UserRepository {
    constructor(database) {
        this.database = database
    }

    save(user) {
        this.database.save(user)
    }
}

class MongoDB {
    save(user) {
        // Логика сохранения юзера в MongoDB
        console.log(`Пользователь ${user.name} сохранен в базе MongoDB`)
    }
}

class PostgreSQL {
    save(user) {
        // Логика сохранения юзера в PostgreSQL
        console.log(`Пользователь ${user.name} сохранен в базе PostgreSQL`)
    }
}

const user1 = new User('Indira')
console.log(user1)

const mongoDB = new MongoDB()
const postgreSql = new PostgreSQL()

const userRepository = new UserRepository(postgreSql)
userRepository.save(user1)

