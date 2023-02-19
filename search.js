import { shoppingCart } from './package.js'

let help = "hi";

let element = document.getElementById("FoodItem");

export function run() {
    element = document.getElementById("FoodItem").value;
    if (element != "") {
        appendRow(element);
    }
    document.getElementById("FoodItem").value = "";
}

function reset() {
    var rowLength = document.getElementById("foodstoringtable").rows.length;
    if (rowLength >= 1) {
        document.getElementById("foodstoringtable").deleteRow(rowLength-1);
    }
}



function appendRow(element) {
    var tbl = document.getElementById('foodstoringtable'); // table reference
    let row = document.createElement("tr");
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");

    
    c1.innerText = element;
    c2.innerText = readFood(element);
    if (element == "milk") {
        var a = document.createElement('a');
        var linkText = document.createTextNode("Recipe 1");
        a.appendChild(linkText);
        
        a.href = "https://www.youtube.com/watch?v=HnkC0zs8IiM";
        a.title = "Recipe 1";
        //console.log(a);
        c3.innerHTML = a
    }
    if (element == "butter") {
        var a = document.createElement('a');
        var linkText = document.createTextNode("Recipe 1");
        a.appendChild(linkText);
        
        a.href = "https://www.youtube.com/watch?v=Clgpbb8FaQY";
        a.title = "Recipe 1";
        //console.log(a);
        c3.innerHTML = a
    }
    if (element == "eggs") {
        var a = document.createElement('a');
        var linkText = document.createTextNode("Recipe 1");
        a.appendChild(linkText);
        
        a.href = "https://www.youtube.com/watch?v=FlZ2YDoR9jw";
        a.title = "Recipe 1";
        //console.log(a);
        c3.innerHTML = a
    }
    if (element == "yogurt") {
        var a = document.createElement('a');
        var linkText = document.createTextNode("Recipe 1");
        a.appendChild(linkText);
        
        a.href = "https://www.youtube.com/watch?v=XrK2aGg7OGY";
        a.title = "Recipe 1";
        //console.log(a);
        c3.innerHTML = a
    }
    //c3.innerText = " ";
    
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
