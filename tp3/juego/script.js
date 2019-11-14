let avatar = document.getElementById("pj");
let suelo = 290;

let btnJugar = document.getElementById("jugar");
btnJugar.addEventListener("click", jugar);

function jugar(){//empezar juego

  document.onkeydown = function(){saltarAvatar()};
  setInterval(function(){
    requestAnimationFrame(enemigos);
  }, Math.random()*6000+1);
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
    }, 800); 
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

function colision(){
  if((pjEnemigo.x >= 70 ) && (pjEnemigo.x <= 90)){
    if(pj.saltar == true){
      nivel.muerto = false;
    }else{
      nivel.muerto = true;
      nivel.velocidad =  0;
      pjEnemigo.x = 60;
      avatar.classList.add("explosion");
      enemigo.style.display = "none";
    }
  }
}
