class Poligono {
  constructor() {
    this.circulos = [];
    this.centro;
    this.cerrado = false;
  }

  cerrarPoligono(ctx) { //cierra el poligono, une la ultima circulo con la primera
    if (this.circulos.length > 0) {
      this.crearLinea(ctx,this.circulos[0].getX(), this.circulos[0].getY(), this.circulos[this.circulos.length - 1].getX(), this.circulos[this.circulos.length - 1].getY())
      this.calcularCentro(ctx);
    }
    this.cerrado = true;
  }

  calcularCentro(ctx) { //calcula el promedio de las posiciones de todos los lados del poligono
    var sumaX = 0;
    var sumaY = 0;

    for (var i = 0; i < this.circulos.length; i++) {
      const obj = this.circulos[i];
      sumaX += obj.getX();
      sumaY += obj.getY();
    }

    sumaX = sumaX / this.circulos.length;
    sumaY = sumaY / this.circulos.length;

    var centroF = new Circulo(sumaX, sumaY, 7, true, 0, 255, 0, 1);
    centroF.dibuja();
    this.centro = centroF;
  }

  crearLinea(ctx, paramPosXI, paramPosYI, paramPosXF, paramPosYF) { //conecta con una linea dos coordenadas
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgb(255,255,0,255)';
    ctx.beginPath();
    ctx.moveTo(paramPosXI, paramPosYI);
    ctx.lineTo(paramPosXF, paramPosYF);
    ctx.stroke();
  }

  clickCirculo(mouseX, mouseY) { //devuelve la circulo que las coordenadas estan dentro
    for (var i = 0; i < this.circulos.length; i++) {
      const obj = this.circulos[i];
      if (obj.clickCirculo(mouseX, mouseY)) {
        return obj;
      }
    }
  }

  clickCentro(mouseX, mouseY) {
    if (this.centro != null) {
      if (this.centro.clickCirculo(mouseX, mouseY)) {
        return this;
      }
    }
    return null;
  }

  dibujaCirculo(ctx, posX, posY) {
    console.log("posX: " + posX + " posY: " + posY);

    if (this.clickCentro(posX, posY) == null) {
      var circulo = new Circulo(posX, posY, 10, false, 255, 0, 0, 1);
      circulo.dibuja()
      if (this.circulos.length > 0) {
        this.crearLinea(ctx, posX, posY, this.circulos[this.circulos.length - 1].getX(), this.circulos[this.circulos.length - 1].getY())
      }
      this.circulos.push(circulo);
    }
  }

  dibujaPoligono(ctx) {
    if (this.centro != null) {
      this.calcularCentro(ctx);
    }
    for (var i = 0; i < this.circulos.length; i++) {
      const obj = this.circulos[i];
      obj.dibuja();
      if (this.circulos.length > 0 && i > 0) {
        const obj1 = this.circulos[i-1];
        this.crearLinea(ctx, obj.getX(), obj.getY(), obj1.getX(), obj1.getY());
      }
    }

    if (this.cerrado) {
      this.cerrarPoligono(ctx);
    }
  }

  corrimiento(corrimientoX, corrimientoY) {
    for (var i = 0; i < this.circulos.length; i++) {
      const obj = this.circulos[i];
      obj.setX(obj.getX() - corrimientoX);
      obj.setY(obj.getY() - corrimientoY);
    }
    this.centro.setX(this.centro.getX() - corrimientoX);
    this.centro.setY(this.centro.getY() - corrimientoY);
  }


  cambiarColor(color) {
    for(var i = 0; i<this.circulos.length; i++){
      const obj = this.circulos[i];
      if(color == true){
        obj.bajarColor();
      }else{
        obj.subirColor();
      }obj.dibuja();
    }
  }

  borrar(circuloParam) {
    for (var i = 0; i < this.circulos.length; i++) {
      const obj = this.circulos[i];
      if (obj === circuloParam) {
        this.circulos.splice(i,1);
      }
    }
  }
}
