document.querySelector('#find').addEventListener('click',find)
let personDiv = document.querySelector('#myDiv')

async function find(){
    personDiv.innerHTML = '<div class="fa-3x"><i class="fas fa-stroopwafel fa-spin"></i></div>'
    // On purpose I set 150 instead 83 to get errors.
    let random = Math.floor(Math.random()* 150);

    let url = `https://swapi.dev/api/people/${random}`
    try {
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)

        if(data.state == 'rejected'){
            throw ('rejected')
        } else {
            let response2 = await fetch(data.homeworld)

            let homeworld = await response2.json()
            console.log(homeworld)
            let personHtml = `<h1>${data.name}</h1> <p>Height: ${data.height}</p> <p>Gender: ${data.gender}</p> <p>Birth Year: ${data.birth_year}</p>  <p>Home World: ${homeworld.name}</p>`
            personDiv.innerHTML = personHtml
        }
    } catch{
        personDiv.innerHTML = `<p>Oh no! That person is not available!</p>`
    }
}