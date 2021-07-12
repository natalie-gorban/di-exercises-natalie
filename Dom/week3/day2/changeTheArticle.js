


let article = document.querySelector('article')
console.log(article)

let p = article.lastElementChild
console.log(p)
p.remove()

// 1.2
let h2 = document.querySelector('h2')
console.log(h2)

function changeColorB (e) {
    h2.style.backgroundColor = 'blue'
}
h2.addEventListener('click', changeColorB)


//   1.3
let h1 = document.querySelector('h1')
console.log(h1)

let myFont = Math.floor(Math.random() * 101)

h1.style.fontSize = `${myFont}px`

// 1.4
let h3 = document.querySelector('h3')
console.log(h3)

function elHide() {
    h3.style.display = 'none'
}
h3.addEventListener('click', elHide)


// 1.5

function makeBold() {
    let paragraphs = document.querySelectorAll('p')
    for(const p of paragraphs){
        p.style.fontWeight ='bold'
    }
}

// 1.6 does not work

const form = document.forms[0]
form.addEventListener('submit', processForm);
console.log(form.elements.fname)
function processForm(event) {
    let fname = form.elements.fname.value
    let lname = form.elements.lname.value
    alert(`[${fname}] - [${lname}]`)
    if(fname !== '' && lname !== ''){
        let table = document.querySelector('body > div > table > tbody')
        console.log(table)
        let newTr = document.createElement('tr')
        let newFname = document.createElement('td')
        let newLname = document.createElement('td')
        newFname.innerText = fname
        newLname.innerText = lname
        newTr.appendChild(newFname)
        newTr.appendChild(newLname)
        table.append(newTr)

    }
}

// 1.7

let secondP = document.querySelector('body > article > p:nth-child(5)')
console.log(secondP)
secondP.addEventListener('mouseover', fadeOut)

function fadeOut(event){
    secondP.style.opacity = '10%'
    secondP.style.transition = 'opacity 2s'
}