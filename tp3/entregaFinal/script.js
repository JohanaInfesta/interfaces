let obj = document.getElementById("personaje");

obj.addEventListener("mousemove", function(event){
var x = window.event.x;
var y = window.event.y;
obj.style.left = x - 10 + "px";
obj.style.top = y + "px";
obj.style.right = (x - obj.style.left)+ "px";
console.log(x, y)
});
