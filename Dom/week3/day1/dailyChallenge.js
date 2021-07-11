const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

const section = document.querySelector('section.listPlanets')

for(const planet of planets) {
    let newDiv = document.createElement('div')
    newDiv.classList = `planet ${planet}`
    newDiv.innerText = planet
    section.append(newDiv)
}