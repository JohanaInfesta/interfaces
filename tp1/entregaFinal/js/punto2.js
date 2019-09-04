"Use Strict"
function punto2(){
  var canvas = document.getElementById("punto2"),
    ctx = canvas.getContext("2d"),
    width = canvas.getAttribute("width"),
    height = canvas.getAttribute("height"),
    color = document.getElementById("color").value;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height); // margen ancho, margen alto, ancho a pintar, alto a pintar
}
