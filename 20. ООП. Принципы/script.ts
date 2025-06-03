interface FlyingBird {
    fly: () => void // нет return
}

interface SwimmingBird {
    swim: () => void // нет return
}

class Duck implements FlyingBird, SwimmingBird {
    fly() {
        console.log('Я летаю')
    }
    swim() {
        console.log('Я плаваю')
    }
}

class Pinguin implements SwimmingBird {
    swim() {
        console.log('Я летаю')
    }
}