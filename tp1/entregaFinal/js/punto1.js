"Use Strict"
let maxVal=100;

document.addEventListener("DOMContentLoaded", loadMatriz());


function loadMatriz(){
  var mat = [];
  for(var fila=0; fila<maxVal; fila++){
    mat[fila] = [];
    for(var col=0; col<maxVal; col++){
      mat[fila][col]= Math.floor(Math.random()*10+1);
    }
  }
  console.table(mat);
  puntoA(mat);
  puntoB(mat);
  puntoC(mat);
}

function puntoA(mat){
  var max = 0;
  for(var fila=0; fila<mat.length; fila++){
    for(var col=0; col<mat.length; col++){
      if(max < mat[fila][col]){
        max = mat[fila][col];
      }
    }
  }
  console.log("Valor max de la mat: " + max);
}
function puntoB(mat){
  var max = 0, min = 1000;
  for(var fila = 0; fila<mat.length; fila += 2){
    for(var col = 0; col<mat.length; col++){
      if(max < mat[fila][col]){
        max = mat[fila][col];
      }
    }
  }
  for(var fila = 1; fila<mat.length; fila +=2){
    for(var col = 0; col<mat.length; col++){
      if(min > mat[fila][col]){
        min = mat[fila][col];
      }
    }
  }
  console.log("Valor max de las filas pares: " + max);
  console.log("Valor min de las filas inpares: " + min);
}
function puntoC(mat){
  var promedioArr = [];
  for(var fila = 0; fila<mat.length; fila++){
    var suma = 0, promedio = 0;
    for(var col = 0; col<mat.length; col++){
      suma += mat[fila][col];
    }
    promedio = suma/mat.length;
    promedioArr[fila] = promedio;
  }
  console.log(promedioArr);
}
