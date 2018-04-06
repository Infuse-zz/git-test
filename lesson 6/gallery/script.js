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


var images = document.querySelectorAll(".image");

x = [];
for (i=0; i<images.length; i++){
x.push(images[i].id);
}
     
    document.getElementById("big_picture").innerHTML="<img src='images/" + this.id + ".jpg'>";
    }

images[0].addEventListener('click', imgChange);
images[1].addEventListener('click', imgChange);
images[2].addEventListener('click', imgChange);
images[3].addEventListener('click', imgChange);
images[4].addEventListener('click', imgChange);

