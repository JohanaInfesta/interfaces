let space = false;
let canvas = document.getElementById("pj");
// let ctx = canvas.getContext("2d");


window.addEventListener("keyup", function(event){
  if(event.keyCode == 32){
    space = false;
    canvas.classList.remove("personaje-saltar");
    canvas.classList.add("personaje");
  }
});
window.addEventListener("keydown", function(event){
  if(event.keyCode == 32){
    space = true;
    console.log("space");
    canvas.classList.add("personaje-saltar");
    canvas.classList.remove("personaje");
  }
});
