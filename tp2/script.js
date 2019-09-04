"Use Strict"

let canvas = document.getElementById("punto1");
let ctx = canvas.getContext("2d");

canvas.addEventListener("click", punto1(event));

function punto1(event){
  var x = event.clientX;
  var y = event.clientY;
  var mensaje = "Posicion x: " + x + " Posicion y: " + y;
  console.log(mensaje);

  canvas.addEventListener("click", punto2(x, y));
}

function punto2(x, y){
  ctx.fillStyle = "#F80000";
  ctx.beginPath();
  ctx.arc(x, y, 100, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  canvas.addEventListener("click", punto3);
}

function punto3(){
  ctx.beginPath();
  ctx.arc(250, 250, 100, 0, Math.PI * 2);
  ctx.lineWidth = 15;
  ctx.lineCap = 'round';
  ctx.strokeStyle = "yellow";
  ctx.stroke();
  ctx.closePath();
}
