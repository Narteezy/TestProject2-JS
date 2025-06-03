export default class Joke {
    iconUrl = ''
    text = ''

    async fetchRandomJoke() {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random')
            const data = await response.json()
            if(data?.icon_url && data?.value) {
                this.iconUrl = data.icon_url
                this.text = data.value
                return true
            }
            else {
                return false
            } 
        }
        catch {
            return false
        }
    }
}