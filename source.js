var solutii = [];
var intrare = [11,2,13];
var elemente = Array(intrare.length);
var solutie = Array(intrare.length);

function permutariRecursiv(k) {
	var i = 0;
  if(k == intrare.length){
  	return solutii.push(solutie.slice());
  }
  while (i < intrare.length){
  	if(!elemente[i]){
    	elemente[i] = true;
      solutie[k] = intrare[i];
      permutariRecursiv(k+1);
      elemente[i] = false;
    } 
    i++;
  }
}

permutariRecursiv(0);
//console.log(solutii);
for(var i = 0; i < solutii.length; i++){
	console.log(solutii[i]);
}
