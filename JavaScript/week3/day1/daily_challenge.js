const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

//  6.1

let newArray = []
gameInfo.forEach(myfunction)
function myfunction(item, index, array){
    newArray.push(`${item.username} !`)
}
console.log(newArray)

// 6.2

let playersBigScore = []
gameInfo.forEach(myfunction2)
function myfunction2(item, index, array){
    // playersBigScore.push({item.username : item.score})

    (item.score > 5) ? playersBigScore.push(item.username): console.log('')
}
console.log(playersBigScore)

// 6.3


let sum = 0
gameInfo.forEach(myfunction3)
function myfunction3(item, index, array){
    sum += item.score
}
console.log(sum)