"Use Strict"
function setPixel(imgData, r, g, b, a, index){
  imgData.data[index++] = r;
  imgData.data[index++] = g;
  imgData.data[index++] = b;
  imgData.data[index++] = a;
  return index;
}
function punto4(){
  var canvas = document.getElementById("punto4"),
      ctx = canvas.getContext("2d"),
      width = canvas.getAttribute("width"),
      height = canvas.getAttribute("height"),
      imgData = ctx.createImageData(width, height),
      r = g = b = index = 0,
      a = 255;
      for(var x = 0; x<width; x++){
        for(var y = 0; y<height; y++){
          r = g = b = (x/width)*255;
          index = setPixel(imgData, r, g, b, a, index);
        }
      }

  ctx.putImageData(imgData, 0, 0);
}
