let box = document.getElementById('animate')
let widthBox = parseInt(animate.style.width.replace('px', ''))
let id
let left = 0
// let container = document.getElementById('container')
// let widthContainer =  parseInt(container.style.width.replace('px', ''))
// console.log('' + widthContainer)
// console.log(container.style)
function myMove() {
    id = setInterval(function() {
        // console.log(`left: ${left}, till container border: ${widthContainer - left}, should-be-max-left: ${widthContainer - widthBox}`)
        if(left == 345){
            // alert('hello')
            stop()
        }
         left += 5
        box.style.left = `${left}px`
    },5)
}
function stop() {
    clearInterval(id)
}
