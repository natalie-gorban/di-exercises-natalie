function strstr(str3, str4) {
    let newstr1 = str3.replace(/ /g, '').toLowerCase().split('').sort().join('')
    let newstr2 = str4.replace(/ /g, '').toLowerCase().split('').sort().join('')
    let result = (newstr1 == newstr2)? true : false
    return result
}
console.log(strstr('Astronomer', 'Moon starer'))
console.log(strstr('School master', 'The classroom'))
console.log(strstr('The Morse Code', 'Here come dots'))
