let trs = "";
let tbody = document.getElementById("table-body")
for (let i = 1; i < 11; i++) {
    let tds = "";
    for (j = 1; j <= 9; j++) {
        tds = tds + ` <td>${j} x ${i} = ${i * j}</td>`
    }
    trs += `<tr>${tds}</tr>`
}
tbody.innerHTML = trs;