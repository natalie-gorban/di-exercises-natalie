function insertRow() {
    let table = document.getElementById('sampleTable')
    let num = table.children.length + 1;
    let trNew = document.createElement('tr')
    console.log(table)
    let columns = [
        document.createElement('td'),
        document.createElement('td')
    ];
    columns[0].innerHTML = `trNew${num} cell1`;
    columns[1].innerHTML = `trNew${num} cell2`;
    trNew.appendChild(columns[0]);
    trNew.appendChild(columns[1]);
    table.appendChild(trNew)
    console.log(table)

}
