"Use Strict"
function setPixel(imgData, r, g, b, a, index, x, y, altura){
  if(altura < 0.5){
    r = g = altura*255;
    index = (x + y * imgData.width) * 4;
    imgData.data[index++] = r;
    imgData.data[index++] = g;
    imgData.data[index++] = b;
    imgData.data[index++] = a;
    return index;
  }else{
    r = altura*255;
    g = 255-(altura*255);
    index = (x + y * imgData.width) * 4;
    imgData.data[index++] = r;
    imgData.data[index++] = g;
    imgData.data[index++] = b;
    imgData.data[index++] = a;
    return index;
  }
}
function punto5(){
  var canvas = document.getElementById("punto5"),
      ctx = canvas.getContext("2d"),
      width = canvas.getAttribute("width"),
      height = canvas.getAttribute("height"),
      imgData = ctx.createImageData(width, height),
      r = g = b = index = 0,
      a = 255;
  for(var y = 0; y<height; y++){
    for(var x = 0; x<width; x++){
      var altura = (x/height);
      index = setPixel(imgData, r, g, b, a, index, x, y, altura);
    }
  }
ctx.putImageData(imgData, 0, 0)
}
