function myJson() {
    let form = document.getElementById('myForm')
    let outputObject = {
        name: form[0].value,
        lastname: form[1].value
    }
    let output = document.getElementById('output')
    output.innerText = Json.stringify(outputObject)

}