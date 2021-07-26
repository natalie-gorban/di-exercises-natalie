// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest()
    console.log(xhr)

// 2. Configure it: GET-request for the URL
xhr.open('GET','https://api.giphy.com/v1/gifs/search?q=sun&limit=10&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My', true)

// 3. Send the requestover the network
    xhr.responseType = 'json'

// 3. Send the request
xhr.send()

// 4. When the request is complete and the response is fully downloded.
xhr.onload = function () {
    if(xhr.status != 200){
    // console.log("error status")
        alert(`error ${xhr.status}: ${xhr.statusText}`)
    // displayError(xhr)
    } else {
        // console.log("finished loading")
        // displayUser(xhr.response)
        console.log(xhr.response)

    }
}

xhr.onerror =function() {
    alert("request failed")
}