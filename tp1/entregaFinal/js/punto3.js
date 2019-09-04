"Use Strict"
function setPixel(imgData, r, g, b, a, index){
  imgData.data[index++] = r;
  imgData.data[index++] = g;
  imgData.data[index++] = b;
  imgData.data[index++] = a;
  return index;
}
function punto3(){
  var canvas = document.getElementById("punto3"),
  ctx = canvas.getContext("2d"),
  width = canvas.getAttribute("width"),
  height = canvas.getAttribute("height"),
  imgData = ctx.createImageData(width, height),
  r = document.getElementById("colorR").value,
  g = document.getElementById("colorG").value,
  b = document.getElementById("colorB").value,
  index = 0,
  a = 255;
  for (var i = 0; i < imgData.data.length; i += 4) {
    index = setPixel(imgData, r, g, b, a, index)
  }
  ctx.putImageData(imgData, 0, 0);
}
