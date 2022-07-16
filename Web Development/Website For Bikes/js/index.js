let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let blackBtn = document.getElementById("black");
let bike = document.getElementById("bike");
let btn = document.getElementById("btn");

redBtn.onclick = function() {
    bike.style.backgroundImage = "url(images/BMW1.png)";
}

blueBtn.onclick = function() {
    bike.style.backgroundImage = "url(images/BMW2.png)";
}

blackBtn.onclick = function() {
    bike.style.backgroundImage = "url(images/BMW3.png)";
}

btn.onclick = function() {
    alert("This is a Demo Website");
}