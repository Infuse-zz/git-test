document.getElementById=("inbasket");
var table = document.createElement("table");
inbasket.appendChild(table);

table.style.border = "1px solid #000";
table.style.width = "100%";
table.style.padding = "10px";
table.style.minHeight = "30px";

function createList() {
    cellArr=[];
    var tr = document.createElement("tr");
    tr.style.height = "40px";
    table.appendChild(tr);
    
    for (i=0; i<3; i++) {
        var td = document.createElement("td");
        tr.appendChild(td);
        cellArr.push(td);
    }
    
    var small = document.getElementsByTagName("img");
        console.log(small);
        
    var title = document.getElementsByClassName("title");
        cellArr[0].innerText = title[0].innerText;
    
    var price = document.getElementsByClassName("price");
        cellArr[1].innerText = price[0].innerText;
        cellArr[2].innerText = "Удалить";  
    }

/*
var button = document.getElementsByClassName("buy-button");
x = [];
for (i=0; i<button.length; i++) {
    x.push(button[i].id)
}
console.log(x);
*/

button[0].addEventListener('click', createList);