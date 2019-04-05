function tres(x){
  for(var i=0;i<x.length;){
    if(x.charAt(i)=='('){
      x=x.substring(0,i)+voltear(x.substring(i+1));

    }
    else
      i++;
  }
  return x;
}
function voltear(x){
    var result="";
    var aux1="";
    for(var i=0;i<x.length;i++){

      if(x.charAt(i)=='('){
        x=aux1+voltear(x.substring(i+1));
      }

      if(x.charAt(i)==')'){
          var aux2="";
          for(var j=aux1.length-1;j>=0;j--)
            aux2=aux2+aux1.charAt(j);
          return aux2+x.substring(i+1);
      }
      else {
        aux1=aux1+x.charAt(i);
      }
    }
    return result;
}

function precuatro(x){
  var tam=parseInt(x.length);
  if(tam%2==1)
    return false;
  else {
    tam=parseInt(tam/2);
    return (x.substring(0,tam)==(x.substring(tam,tam*2)))
  }
}

console.log("ejemplo del ejercicio tres: "+pretres("de(gs)ra(aic)"));
console.log("ejemplo del ejercicio cuatro: "+precuatro("aa"));
