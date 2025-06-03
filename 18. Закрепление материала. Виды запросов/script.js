const usersList = document.getElementById('usersList')
const cardContainer = document.getElementById('cardContainer')

async function fetchUsers() {
    try {
        const response = await fetch('https://dummyjson.com/users?limit=10')
        const data = await response.json()
        if(data?.users?.length > 0) {
            const users = data.users
            
            for(let i = 0; i < users.length; i++) {
                const user = users[i]

                const aTag = document.createElement('a')
                aTag.innerText = `${user.firstName} ${user.lastName}`
                aTag.className = 'user-element list-group-item list-group-item-action'

                if(i === 0) {
                    aTag.classList.add('active')

                    const cardHtml = `
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${user.firstName} ${user.lastName}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">${user.username}</h6>
                                <p class="card-text">State: ${user.address.state}. City: ${user.address.city}. Address: ${user.address.address}. Postal code: ${user.address.postalCode}</p>
                                <p class="card-text">${user.company.name}</p>
                                <a href="mailto:${user.email}" class="card-link">Send email</a>
                            </div>
                        </div>
                    `
                    cardContainer.innerHTML = cardHtml
                }
                
                aTag.addEventListener('click', () => {
                    const userTags = document.querySelectorAll('.user-element')
                    userTags.forEach(userTag => {
                        userTag.classList.remove('active')
                    }) // сперва убераем у всех тэгов класс active
                    aTag.classList.add('active')

                    const cardHtml = `
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${user.firstName} ${user.lastName}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">${user.username}</h6>
                                <p class="card-text">State: ${user.address.state}. City: ${user.address.city}. Address: ${user.address.address}. Postal code: ${user.address.postalCode}</p>
                                <p class="card-text">${user.company.name}</p>
                                <a href="mailto:${user.email}" class="card-link">Send email</a>
                            </div>
                        </div>
                    `
                    cardContainer.innerHTML = cardHtml
                })

                usersList.appendChild(aTag)
            }
        }
        
    }
    catch(err) {
        alert('Error when fetching users!')
        console.error(err)
    }
}

fetchUsers()