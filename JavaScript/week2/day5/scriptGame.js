console.log('\nExercise 1 \n First Part');


function playTheGame(){

    const button = document.getElementById('button onclick');
    let p = confirm('wanna play?')
    if(!p){
        alert('No problem, Goodbye')
    } else {
        let userNumber = prompt('Enter a number between 0 and 10')
        if(isNaN(userNumber)){
            alert('Sorry Not a number, Goodbye')
        } else if(!isNaN(userNumber) && (userNumber > 10 || userNumber < 0)){
            alert('Sorry, it’s not a good number, Goodbye')
        } else {
            let computerNumber = Math.round(Math.random()*10)
            console.log(computerNumber)
            test(userNumber, computerNumber)
        }
    }
}
console.log('\nExercise 1\n Second part');


function test(userNumber, computerNumber){
    for(let i = 0; i < 3; i++){
        userNumber = parseInt(userNumber)
        if(userNumber === computerNumber){
            alert('winner')
            return
        } else if(userNumber > computerNumber){
            userNumber = prompt('Your number is bigger then the computer’s, guess again')
        } else {
            userNumber = prompt('Your number is smaller then the computer’s, guess again')
        }
    }
    alert('out of chances')

}
