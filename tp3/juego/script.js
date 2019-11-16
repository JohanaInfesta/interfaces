let avatar = document.getElementById("pj");
let suelo = 290;

let btnJugar = document.getElementById("jugar");
btnJugar.addEventListener("click", jugar);

function jugar(){//empezar juego

  document.onkeydown = function(){saltarAvatar()};
  setInterval(function(){
    requestAnimationFrame(enemigos);
  }, Math.random()*5000);
  setInterval('score()', 500);
}

let pj = { y : 290, vy : 0, gravedad :2 , salto : 150, vymax : 9, saltar : false}

function saltarAvatar(){
  if(event.keyCode == 32){
    pj.saltar = true;
    saltar();
  }
}

function saltar(){
    avatar.style.animation = "saltar 1s 1"
    setTimeout(function(){
      bajarAvatar()
    }, 900); 
}

function bajarAvatar(){
  if(pj.saltar == true){
    pj.saltar = false;
    avatar.style.animation = "correr 1s steps(8) reverse infinite";
  }
}

let enemigo = document.getElementById("enemigo");
let pjEnemigo = {x : 760, y : 120 , suelo};
let nivel = {velocidad : 5, puntuacion : 0, muerto : false};

function enemigos(){// traer enemigo
  if(pjEnemigo.x < -50){
    pjEnemigo.x = 760;
    enemigo.style.left = pjEnemigo.x + "px";
  }else{
    enemigo.style.left = (pjEnemigo.x -= nivel.velocidad) + "px";
    requestAnimationFrame(enemigos);
  }
  colision();
}

let puntuacion = {inicio : 0, fin : 100};

function score(){
  var pts = document.getElementById("puntos");
  if(nivel.muerto == false && puntuacion.inicio >= puntuacion.fin){
    puntuacion.inicio = 0;
    document.getElementById("win").style.display = "initial";
    //ganaste
  }else if(nivel.muerto == true){
    document.getElementById("loser").style.display = "initial";
    //perdiste
  }else{
    puntuacion.inicio ++;
    pts.innerHTML = puntuacion.inicio;
  }return puntuacion.inicio;
}

function colision() {
  let pj = avatar.getBoundingClientRect();
  let enemy = enemigo.getBoundingClientRect();
  if (!nivel.muerto) {
      if ((pj.left) < enemy.left + enemy.width && pj.left + pj.width > enemy.left &&
          (pj.top) < enemy.top + enemy.height && pj.top + pj.height > enemy.top) {
          derrota();
      }
  }
}

function derrota(){
  nivel.muerto = true;
  nivel.velocidad =  0;
  avatar.classList.remove("personaje");
  document.getElementById("explosion").style.display = "initial";
  enemigo.style.display = "none";
}