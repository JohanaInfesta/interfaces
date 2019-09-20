let obj = document.getElementById("personaje");

obj.addEventListener("mousemove", function(event){
var x = window.event.x;
var y = window.event.y;
obj.style.left = x + "px";
obj.style.top = y + "px";
console.log(x, y)
});
