let avatar = document.getElementById("pj");
let pj = {y : 280, vy : 0, gravedad :2 , salto : 80, vymax : 9, saltar : false}

document.addEventListener("keydown", function(event){
  if(event.keyCode == 32){
    pj.saltar = true;
    pj.vy = pj.salto;
    gravedad();
  }
});

function gravedad(){
  if(pj.saltar == true){
    if( pj.y < 280){
      pj.saltar = false;
      pj.vy = 0;
      pj.y = 280;
      avatar.style.top = pj.y + "px";
    }else{
      pj.vy -= pj.gravedad;
      //pj.y -= pj.vy
      avatar.style.top = (pj.y - pj.vy) + "px";
    }
  }
}
window.addEventListener("keyup", function(event){
  if(event.keyCode == 32){
    saltar = false;
    avatar.style.top = 280 + "px";
    // return space;
  }
});
