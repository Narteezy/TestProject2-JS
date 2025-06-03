const cardsContainer = document.getElementById('cardsContainer')


fetch('https://restcountries.com/v3.1/all?limit=100')
.then(response => response.json())
.then(countries => {
    let cardHtml = ``

    
    countries.forEach(country => {
        // if(country.name.official === 'Republic of Kazakhstan') {
        //     return
        // }

        let languages = ''
        const currencyArray = []

        if(country?.languages) {
            languages = Object.values(country.languages).join(', ')
        }
        if(country?.currencies) {
            // Object.keys(country.currencies).forEach(key => {
            //     const name = country.currencies[key].name
            //     const symbol = country.currencies[key].symbol
            //     currencyArray.push(`${symbol} ${name}`)
            // })

            // for (const [_, value] of Object.entries(country.currencies)) {
            //     const name = value.name
            //     const symbol = value.symbol
            //     currencyArray.push(`${symbol} ${name}`)
            // }

            Object.values(country.currencies).forEach(value => {
                const name = value.name
                const symbol = value.symbol
                currencyArray.push(`${symbol} ${name}`)
            })
        }

        const currency = currencyArray.join(', ')
        
        cardHtml += `
        <div class="card" style="width: 18rem;">
            <img src="${country.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${country.name.official}</h5>
                <p class="card-text">${country.region}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">👨‍👩‍👧‍👦 ${country.population}</li>
                <li class="list-group-item">🗣️ ${languages}</li>
                <li class="list-group-item">💰 ${currency} </li>
            </ul>
        </div>
        `
    })

    console.log(cardHtml)
    
    cardsContainer.innerHTML = cardHtml
})