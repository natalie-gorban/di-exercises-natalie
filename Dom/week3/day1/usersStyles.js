const divs = document.getElementsByTagName('div')
divs[0].setAttribute('style', 'background-color:lightblue')
divs[0].style.padding = '20px'

const liToHide = document.querySelector("body > ul > li:nth-child(1)")
liToHide.style.display = "none"

const liToChange = document.querySelector("body > ul > li:nth-child(2)")
liToChange.style.borderStyle = 'solid'

const body = document.querySelector("body")
body.style.fontSize = '20'