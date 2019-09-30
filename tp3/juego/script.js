let avatar = document.getElementById("pj");
let pj = {y : 290, vy : 0, gravedad :2 , salto : 150, vymax : 9, saltar : false}
let suelo = 290;

let btnJugar = document.getElementById("jugar");
btnJugar.addEventListener("click", jugar);

function jugar(){//empezar juego

  document.onkeydown = function(){saltarAvatar()};
  document.onkeyup = function(){bajarAvatar()};
  setInterval(function(){
    requestAnimationFrame(enemigos);
  }, Math.random()*5000+1);
  // score();
setInterval('score()', 500);
}


function saltarAvatar(){
  if(event.keyCode == 32){
    pj.saltar = true;
    pj.vy = pj.salto;
    gravedad();
    // requestAnimationFrame(gravedad);
  }
}
function gravedad(){
  if(pj.saltar == true){
    if( pj.y < suelo){
      pj.saltar = false;
      pj.vy = 0;
      pj.y = suelo;
      avatar.style.top = pj.y + "px";
    }else{
      pj.vy -= pj.gravedad;
      avatar.style.top = (pj.y -= pj.vy) + "px";
    }
  }
}

function bajarAvatar(){
  if(event.keyCode == 32){
    pj.saltar = false;
    avatar.style.top = suelo + "px";
  }
}

let enemigo = document.getElementById("enemigo");
let pjEnemigo = {x : 760, y : 120 , suelo};
let nivel = {velocidad : 3, puntuacion : 0, muerto : false};

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
      console.log("win")
      puntuacion.inicio = 0;
      //ganaste
    }else if(nivel.muerto == true){
      console.log("muerto");
      document.getElementById("loser").style.display = "initial";
    }else{
      puntuacion.inicio ++;
      pts.innerHTML = puntuacion.inicio;
    }
  // },100);
return puntuacion.inicio;
}

function colision(){
  if((pjEnemigo.x >= 100 ) && (pjEnemigo.x <= 120 )){
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
