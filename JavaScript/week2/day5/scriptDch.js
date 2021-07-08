console.log('\nDaily Challenge');

function downBottles(){

    let bottles = prompt ('maxBottles')
    bottles = parseInt(bottles)
    for(let i = 1; bottles > 0; i++){
        console.log(bottles +  ' bottles of the beer on the wall')
        console.log(bottles + ' bottles of the beer on the wall')
        console.log(bottles + ' bottles of the beer.')
        if(i === 1){
            console.log('Take 1 down, pass it around')
        } else {
            console.log('Take ' + i + ' down, pass them around')
        }
        bottles -= i


    }
}
downBottles(99)