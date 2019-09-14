class Circulo {
  constructor(x, y, radio, paramCentro, r, g , b, a) {
    this.posX = x;
    this.posY = y;
    this.radio = radio;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.color = 'rgb(' + this.r +','+ this.g +','+ this.b + ',' + this.a + ')';
    this.centro = paramCentro;
  }

  dibuja() { //se dibuja asi mismo en el ctx
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radio, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  getY() {
    return this.posY;
  }

  getX() {
    return this.posX;
  }

  setX(x) {
    this.posX = x;
  }

  setY(y) {
    this.posY = y;
  }

  clickCirculo(paramX, paramY) {
    var radioMouse = Math.sqrt(Math.pow(paramX - this.posX , 2) + Math.pow(paramY - this.posY , 2));
    if (radioMouse <= this.radio) {
      return true;
    }
    return false;
  }

  bajarColor() {
    if (this.r < 255) {
      this.color = 'rgba('+ (this.r+=4) + ','+this.g + ',' + this.b + ',' + this.a + ')';
    }
    if(this.r == 255){
      this.color = 'rgba('+ this.r + ','+(this.g += 4) + ',' + (this.b += 4) + ',' + this.a + ')';
      console.log(this.color + "bajarRojo");

    }
  }

  subirColor() {
    if((this.g >= 0) || (this.b >= 0)){
      this.color = 'rgba('+ (this.r-=4) + ','+this.g + ',' + this.b + ',' + this.a + ')';
    }
    if(this.r <= 255){
      this.color = 'rgba('+ this.r + ','+(this.g -= 4) + ',' + (this.b -= 4) + ',' + this.a + ')';
      console.log(this.color + "subir");
    }
  }
}
