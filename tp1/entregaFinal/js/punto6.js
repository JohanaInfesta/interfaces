"Use Strict"

let imageObj = new Image();
imageObj.src = "../imagen.jpg";

let canvas = document.getElementById("filtroGris");
let ctx = canvas.getContext("2d");
// width = canvas.getAttribute("width"),
// height = canvas.getAttribute("height"),

imageObj.onload = function (){
  canvas.width = imageObj.width;
  canvas.height = imageObj.height;

  ctx.drawImage(imageObj, 0, 0);

  aplicarFiltroGris(imageObj);
}

function  aplicarFiltroGris( imageObj ){
  var imgData = ctx.getImageData ( 0 , 0 , imageObj.width , imageObj.height ),
  pixel = imgData.data;
  numPixel = imgData.width * imgData.height;
  for ( var i = 0; i < numPixel; i++ ) {
    var r = pixel[ i * 4 ];
    var g = pixel[ i * 4 + 1 ];
    var b = pixel[ i * 4 + 2 ];

    var grey = ( r + g + b ) / 3;

    pixel[ i * 4 ] = grey;
    pixel[ i * 4 + 1 ] = grey;
    pixel[ i * 4 + 2 ] = grey;
  }

  ctx.putImageData( imgData, 0, 0 );
}
