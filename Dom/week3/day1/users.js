console.log('\nex2')

const uls = document.getElementsByTagName('ul')
const firstUlLastLi = uls[0].lastElementChild
console.log(firstUlLastLi.innerHTML)
firstUlLastLi.innerHTML = "Richard"

for(let ul of uls){
    ul.className = 'student_list'
    const firstLi = ul.firstElementChild
    firstLi.innerHTML = "Natalie"
    firstLi.classList = "university attendance"
    let newLi = document.createElement('li')
    let newText = document.createTextNode('Hey students')
    newLi.append(newText)
    ul.append(newLi)
}

const sarahLi = document.querySelector("body > ul:nth-child(3) > li:nth-child(2)")
uls[1].removeChild(sarahLi)