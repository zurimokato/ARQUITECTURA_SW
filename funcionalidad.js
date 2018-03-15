function  Calculadora(numA, numB){
	this.numA=numA;
	this.numB=numB;
	this.sumar=function(){
		var suma=this.numA+this.numB;
		alert(suma)
		return suma;	
	}
	this.restar=function(){
		
	}
}


function operar(){
	var numA=parseInt(document.getElementById("numA").value);
	var numB=parseInt(document.getElementById("numB").value);
	var cal=new Calculadora(numA,numB);
	var suma=cal.sumar();
}
