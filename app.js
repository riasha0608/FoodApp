import { shoppingCart } from './package.js'

var element = document.getElementById("FoodItem")
// const fs = require('fs');
let help = 'hi';

export function run() {
    element = document.getElementById("FoodItem").value;
    appendRow(element); 
}

function reset() {
    var table = document.getElementById("foodstoringtable")
    var rowLength = document.getElementById("foodstoringtable").rows.length;
    table.deleteRow(rowLength - 1);
}

function appendRow(element) {
    var tbl = document.getElementById('foodstoringtable'); // table reference
    let row = document.createElement("tr");
    let c1 = document.createElement("td")
    let c2 = document.createElement("td")
    let c3 = document.createElement("td")

    c1.innerText = element;
    c2.innerText = readFood(element);
    c3.innerText = " ";
    
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);

    tbl.appendChild(row);
}

function readFood(food) {
    help = JSON.stringify(shoppingCart)
    return findDays(food);
}

const findDays = (name) => {
    const why = JSON.parse(help);
    console.log(why[name])
    return why[name];
}

addButton.addEventListener('click', run)
deleteButton.addEventListener('click', reset)