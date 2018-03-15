function  Calculadora(numA, numB){
	this.numA=numA;
	this.numB=numB;
	this.sumar=function(){
		var suma=this.numA+this.numB;
		alert(suma);
		return suma;	
	}
	this.restar=function(){
		var restar=this.numA-this.numB;
		alert(restar);
		return restar;
	}
	this.multiplicar=function(){
		var producto=this.numA*this.numB;
		alert(producto);
		return producto;
	}
	this.dividir=function(){
		if(this.numB!=0){
		var cociente=this.numA/this.numB;
		alert(cociente);
		}else{
			alert("no se puede dividir por cero");
		}
		return cociente;
	}
	this.elevar=function(){
		var num=Math.pow(numA,numB);
		alert(num);
		return num;
	}
}


function operar(){
	var numA=parseInt(document.getElementById("numA").value);
	var numB=parseInt(document.getElementById("numB").value);
	var operando = document.getElementById("mySelect").value;
	var cal=new Calculadora(numA,numB);
	if (operando=='sumar') {
		var suma=cal.sumar();
	}else{
		if (operando=='restar') {
			var restar=cal.restar();
		}else{
			if (operando=='multiplicar') {
				var restar=cal.multiplicar();
			}else{
				if (operando=='dividir') {
					var restar=cal.dividir();
				}else{
					if (operando=='pow') {
					var restar=cal.elevar();
					}
				}
			}
		}
	}
	
	
}
