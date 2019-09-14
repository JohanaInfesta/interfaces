let canvas = document.getElementById("punto1");
let ctx = canvas.getContext("2d");

let figuras = [];
let figura = new Poligono();
let objetoActual = null;
let posCentroInicialX = 0;
let posCentroInicialY = 0;
let centro = false;
let letraC = false;

//punto 1, 2 y 3
canvas.addEventListener("click", function(){
  if (esVacio(event)) {
    var x = event.layerX;
    var y = event.layerY;
    figura.dibujaCirculo(ctx, x, y);
  }
}, false);
//punto 4 y 5
document.getElementById("btnCerrar").addEventListener("click", function(){
  figura.cerrarPoligono(ctx);
  figuras.push(figura);
  figura = new Poligono();
});

// punto 6 y 7
canvas.addEventListener("mousedown", function(){
  for (var i = 0; i < figuras.length; i++) {
    const obj = figuras[i];
    if (obj.clickCirculo(event.layerX, event.layerY) != null) {
      objetoActual = obj.clickCirculo(event.layerX, event.layerY);
      return;
    }
  }
  if (figura.clickCirculo(event.layerX, event.layerY) != null) {
    objetoActual = figura.clickCirculo(event.layerX, event.layerY);
  }
  if (objetoActual == null) {
    seleccionarCentro(event);
  }
}, false);
  //recorre los circulos y se fija si estoy parado en el centro
function seleccionarCentro(event) {
  for (var i = 0; i < figuras.length; i++) {
    const obj = figuras[i];
    if (obj.clickCentro(event.layerX, event.layerY) != null) {
      objetoActual = figuras[i].clickCentro(event.layerX, event.layerY);
      posCentroInicialX = event.layerX;
      posCentroInicialY = event.layerY;
      centro = true;
      return;
    }
  }
  if (figura.clickCirculo(event.layerX, event.layerY) != null) {
    objetoActual = figura.clickCentro(event.layerX, event.layerY);
    posCentroInicialX = event.layerX;
    posCentroInicialY = event.layerY;
  }
}
canvas.addEventListener("mousemove", function(){
  if (objetoActual != null) {
    if (centro) {
      let posInicialMoverX = posCentroInicialX - event.layerX;
      let posInicialMoverY = posCentroInicialY - event.layerY;
      objetoActual.corrimiento(posInicialMoverX, posInicialMoverY);
      actualizar();

    } else {
      objetoActual.setX(event.layerX);
      objetoActual.setY(event.layerY);
      actualizar();

    }
  }
  posCentroInicialX = event.layerX;
  posCentroInicialY = event.layerY;
});

canvas.addEventListener("mouseup", function(){
  objetoActual = null;
  centro = false;
  posCentroInicialX = 0;
  posCentroInicialY = 0;
});

// punto 8

window.addEventListener("keydown", function(event){
  if (event.key == 'c') {
    letraC = true;
  }
});
window.addEventListener("keyup", function(event){
  if (event.key == 'c') {
    letraC = false;
  }
});
window.addEventListener("wheel", function(event){
  if(letraC){
    for (var i = 0; i < figuras.length; i++) {
      const obj = figuras[i];
      letraC = true;
      obj.cambiarColor(letraC);
    }
  }else{
    for (var i = 0; i < figuras.length; i++) {
      const obj = figuras[i];
      letraC = false;
      obj.cambiarColor(letraC);
    }
  }
});

//punto 9
canvas.addEventListener("dblclick", function(event){
    if (figuras.length > 0) { //pregunta a todas
      for (var i = 0; i < figuras.length; i++) {
        const obj = figuras[i];
        if (obj.clickCirculo(event.layerX, event.layerY) != null) {
          obj.borrar(obj.clickCirculo(event.layerX, event.layerY));
          actualizar();
        }
      }
    }
});

//funcion para verificar si me paro en un circulo/poligono o no
function esVacio(event) {
  if (figura.clickCirculo(event.layerX, event.layerY) != null) {
    return false;
  } else if (figuras.length > 0) {
    for (var i = 0; i < figuras.length; i++) {
      const obj = figuras[i];
      if (obj.clickCirculo(event.layerX, event.layerY) || obj.clickCentro(event.layerX, event.layerY)) {
        return false;
      }
    }
  }
  return true;
}
//funcion actualizar para que no se desborden los dibujos cada vez que los muevo
function actualizar() {
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  figura.dibujaPoligono(ctx);
  for (var i = 0; i < figuras.length; i++) {
    const obj = figuras[i];
    obj.dibujaPoligono(ctx);
  }
}
