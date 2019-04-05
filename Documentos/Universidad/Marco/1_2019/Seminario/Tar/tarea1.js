function preuno(){
  var matrix = [[0, 1, 1, 2],
                [0, 5, 0, 0],
                [2, 0, 3, 3]];
  var sum=0;
  for(var i=0;i<3;i++){
    for(var j=0;j<4;j++){
      sum+=matrix[i][j];
    }
  }
  return sum;
}



function predos(n){
  var r=parseInt(((n-1)/100))+1
  return r;
}


console.log("ejemplo del ejercicio uno : "+preuno());
console.log("ejemplo del ejecicio dos :"+predos(100));
