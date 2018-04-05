var width = 286, //размер картинки с отступами
count = 3, //количество картинок
position = 0; //начальная позиция

var list = document.querySelector(".list"), 
    arrow = document.querySelectorAll(".arrow"),
    ul = list.children[0];

function back() { 
    position = 0;
    ul.style.marginLeft = position + 'px';
}

function forward() {
    position = (-width * (ul.children.length-4));
    ul.style.marginLeft = position + "px";
}
    arrow[0].addEventListener('click', back);
    arrow[1].addEventListener('click', forward);

/*
function imgChange() {
    for (i=0; i<images.length; i++) {
        var img = images[i];
        img.src = "images/big_" + [i+1] + ".jpg";
        console.log(img);
        //big_picture.appendChild(img[i]);
    }
}

*/
var images = document.querySelectorAll(".image");

/* working part
function imgChange() {
var img = document.getElementById("big_picture");
    console.log(big_picture);
    big_picture.innerHTML="<img src='images/big_2.jpg'>";
   // img.src = "images/big_2.jpg";
    
}
*/

/* working part2
function imgChange() {
        
document.getElementById("big_picture").innerHTML="<img src='images/pic_" + [i] + ".jpg'>";
console.log(big_picture); 
    }
*/

//function imgChange(id) {
   // var id_item = "pic_" + x[i];
  //  document.getElementById(id_item).innerHTML = "<img src='images/pic_" + [i] + ".jpg'>";
//}

function imgChange() {
    x = [];
    for (i=0; i<images.length; i++) {
        x.push(images[i].id);

    document.getElementById("big_picture").innerHTML="<img src='images/" + x[i] + ".jpg'>";
    }

    }

images[0].addEventListener('click', imgChange);
images[1].addEventListener('click', imgChange);
images[2].addEventListener('click', imgChange);
images[3].addEventListener('click', imgChange);
images[4].addEventListener('click', imgChange);

