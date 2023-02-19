var element = document.getElementById("FoodItem")
function run() {
    element = document.getElementById("FoodItem").value;
    appendRow(element);
    document.getElementById("FoodItem").value = "";
}

function reset() {
    var rowLength = document.getElementById("foodTable").rows.length;
    for (let i = 1; i < rowLength; i++) {
        document.getElementById("foodTable").deleteRow(i);
    }
}

function appendRow(element) {
    var tbl = document.getElementById('foodstoringtable'); // table reference
    let row = document.createElement("tr");
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");

    
    c1.innerText = element;
    c2.innerText = " ";
    c3.innerText = " ";
    
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);

    tbl.appendChild(row);
}