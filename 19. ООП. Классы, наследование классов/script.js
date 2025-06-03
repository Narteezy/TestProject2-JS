// OOP - Object Oriented Programming

// const student1 = {
//     name: 'Ainagul',
//     speciality: 'Frontend Developer',
//     work: function() {
//         console.log(`Ainagul is working as ${this.speciality}!`)
//     },
//     address: {
//         city: 'Astana',
//         country: 'Kazakshtan',
//         showAddress() {
//             console.log(`Ainagul is living in ${this.country}, ${this.city}`)
//         }
//     }
// }

// const student2 = {
//     name: 'Galymzhan',
//     speciality: 'Backend Developer',
//     work() {
//         console.log(`Galymzhan is working as ${this.speciality}!`)
//     },
//     address: {
//         city: 'Astana',
//         country: 'Kazakstan',
//         showAddress() {
//             console.log(`Galymzhan is living in ${this.country}, ${this.city}`)
//         }
//     }
// }

// student1.speciality = 'UX/UI Designer'
// student1.speciality = 'QA Engineer'
// student2.speciality = 'ML Engineer'
// console.log(student1)

// student1.work()
// student2.work()

// student1.address.showAddress()


// ФУНКЦИЯ-КОНСТРУКТОР
// function Student(name, speciality, country, city) {
//     // this = {}
//     this.name = name
//     this.speciality = speciality
//     this.address = {
//         country,
//         city
//     }
//     this.work = function() {
//         console.log(`${this.name} is working as ${this.speciality}`)
//     }
//     this.showAddress = function() {
//         console.log(`${this.name} is living in ${this.address.country}, ${this.address.city}`)
//     }
//     // return this
// }

// const student1 = new Student('Nazgul', 'Devops Engineer', 'Kazakhstan', 'Almaty')
// const student2 = new Student('Akzhan', 'SysAdmin', 'Vietnam', 'Dalat')

// console.log(student1)
// console.log(student2)

// student1.work()
// student1.showAddress()
// student2.work()
// student2.showAddress()

// ЗАДАНИЕ 2
// function Shop(title, address) {
//     this.title = title
//     this.address = address
// }

// const shop1 = new Shop('Techodom', 'Kabanbai Batyr 62, MEGA Silkway')
// const shop2 = new Shop('Mechta', 'Syganak 3')

// const shops = [shop1, shop2]
// console.log(shops)

// const shopAddresses = shops.map(shop => shop.address)
// console.log(shopAddresses)


// CLASS
// function Student(name, speciality, country, city) {
//     // this = {}
//     this.name = name
//     this.speciality = speciality
//     this.address = {
//         country,
//         city
//     }
//     this.work = function() {
//         console.log(`${this.name} is working as ${this.speciality}`)
//     }
//     this.showAddress = function() {
//         console.log(`${this.name} is living in ${this.address.country}, ${this.address.city}`)
//     }
//     // return this
// }

// class Student {
//     constructor(name, speciality, country, city) {
//         this.name = name
//         this.speciality = speciality
//         this.address = {
//             city,
//             country
//         }
//     }

//     work() {
//         console.log(`${this.name} is working as ${this.speciality}`)
//     }

//     showAddress() {
//         console.log(`${this.name} is living in ${this.address.country}, ${this.address.city}`)
//     }
// }

// const student1 = new Student('Erbol', 'Frontend Developer', 'Canada', 'Toronto')
// const student2 = new Student('Guzel', 'Cloud Engineer', 'France', 'Paris')

// console.log(student1)
// console.log(student2)

// student1.work()
// student2.work()

// student1.showAddress()
// student2.showAddress()

// const num1 = +prompt('Введите первое число:')
// const num2 = +prompt('Введите второе число:')


// ПРИНЦИПЫ ООП
// Abstraction - Абстракция
// Inheritance - Наследование
// Polymorphism - Полиформизм
// Incapsulation - Инкапсуляция

// Abstraction !== abstract class, не обьясняй как делать а просто делай
// class Human {
//     constructor(name) {
//         this.name = name
//         this.speed = '0 m/s'
//     }

//     walk() {
//         console.log(`${this.name} is walking!`)
//         this.speed = '3 m/s'
//     }

//     run() {
//         console.log(`${this.name} is running!`)
//         this.speed = '10 m/s'
//     }
// }

// const human1 = new Human('Indira')
// human1.walk()
// human1.run()
// console.log(human1)

// const numbers = [2, 45, 65, 23]
// numbers.forEach((num) => {
//     console.log(num)
// })


// Inheritance - у каждого успешного человека стоит за спиной неудачник
// class Developer {
//     constructor(name, language) {
//         this.name = name
//         this.language = language
//     }

//     getInfo() {
//         console.log(`${this.name} is a developer, who codes with ${this.language}`)
//     }

//     code() {
//         console.log(`Developer ${this.name} is coding!`)
//     }
// }

// // Frontend Developer - Front (js)
// // Web Developer - Front (js), back(python, php, c#, java, golang)

// class WebDeveloper extends Developer {
//     code() {
//         console.log(`Web developer ${this.name} is coding`)
//     }
// }

// class FrontendDeveloper extends WebDeveloper {
//     code() {
//         console.log(`Frontend Developer ${this.name} is coding`)
//     }
// }

// const developer1 = new Developer('Riza', 'Golang')
// console.log(developer1)
// developer1.getInfo()
// developer1.code()

// const developer2 = new WebDeveloper('Akzhan', 'Java')
// console.log(developer2)
// developer2.getInfo()
// developer2.code()


// Polymorphism - вы не понимаете, это другое
// class FrontendDeveloper {
//     constructor(name, framework) {
//         this.name = name
//         this.framework = framework
//     }

//     getInfo() {
//         console.log(`${this.name} is a frontend developer, who uses ${this.framework} framework!`)
//     }

//     work() {
//         console.log(`${this.name} is coding layout and functionality of website!`)
//     }
// }

// class MiddleFrontendDeveloper extends FrontendDeveloper {
//     work() {
//         super.work()
//         console.log(`${this.name} is working with complex components and make unit tests!`)
//     }
// }

// const frontendDeveloper1 = new FrontendDeveloper('Ainagul', 'Next.js')
// frontendDeveloper1.getInfo()
// frontendDeveloper1.work()

// const frontendDeveloper2 = new MiddleFrontendDeveloper('Galymzhan', 'Angular')
// frontendDeveloper2.getInfo()
// frontendDeveloper2.work()


// INCAPSULATION - кому то можно кому то нет
// class KaspiGold {
//     // #balance = 0 // private
//     _balance = 0 // protected
//     constructor(owner) {
//         this.owner = owner
//     }

//     getSalary(company, amount) {
//         this._balance += amount
//         console.log(`Компания ${company} перевела ${amount} kzt на баланс. Комментарий: ЗП`)
//     }
// }

// class KaspiDeposit extends KaspiGold {
//     _deposit = 0

//     addDeposit(amount) {
//         this._balance -= amount
//         this._deposit += amount
//     }
// }

// const kaspiGoldOwner1 = new KaspiGold('Ainagul')
// kaspiGoldOwner1.getSalary('ИП NomadCosmetology', 900000)
// console.log(kaspiGoldOwner1)

// const kaspiGoldOwner2 = new KaspiDeposit('Galymzhan')
// kaspiGoldOwner2.addDeposit(1000000)
// console.log(kaspiGoldOwner2)


// ЗАДАНИЕ 4
class Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }
  
    init() {
      const img = document.createElement('img') // <img/>
      img.src = this.imgUrl // <img src="ссылка" />
      this.html = img
      this.render()
  
      document.body.style.backgroundColor = 'black'
    }
    
    render() {
      document.body.appendChild(this.html) // <body><img src="ссылка" /></body>
      this.html.style.position = 'fixed' // <body><img src="ссылка" style="position: fixed" /></body>
      this.html.style.top = this.top + 'px' // <body><img src="ссылка" style="position: fixed; top: 0" /></body>
      this.html.style.left = this.left + 'px' // <body><img src="ссылка" style="position: fixed; top: 0; left: 0" /></body>
      this.html.style.width = this.width + 'px' // <body><img src="ссылка" style="position: fixed; top: 0; left: 0; width: 200px" /></body>
      this.html.style.zIndex = 1
    }
  
    moveUp() {
      this.top -= 20
      this.render()
    }
    moveDown() {
      this.top += 20
      this.render()
    }
    moveLeft() {
      this.left -= 20
      this.render()
    }
    moveRight() {
      this.left += 20
      this.render()
    }
  }

const logo1 = new Logo('https://optim.tildacdn.biz/tild6463-3261-4630-b266-343730396462/-/resize/240x/-/format/webp/logofull.png')
logo1.init()
logo1.moveRight()
logo1.moveRight()
logo1.moveRight()
logo1.moveRight()
logo1.moveDown()
logo1.moveDown()
logo1.moveDown()

console.log(logo1)

class Circle {
    constructor(size, color) {
        this.size = size
        this.color = color
    }

    render() {
        const div = document.createElement('div')
        div.style.width = this.size + 'px'
        div.style.height = this.size + 'px'
        div.style.position = 'fixed'
        div.style.left = '0px'
        div.style.right = '0px'
        div.style.backgroundColor = this.color
        div.style.borderRadius = '50%'
        document.body.appendChild(div)
    }
}

const circle1 = new Circle(200, 'green')
circle1.render()

const circle2 = new Circle(100, 'red')
circle2.render()

const logo2 = new Logo('https://cond.myfreedom.com.br/assets/img/myfreedom-adm%201.png')
logo2.init()


class Converter {
    
}