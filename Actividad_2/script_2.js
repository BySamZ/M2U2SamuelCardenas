function num_mayores_menores(){

    var a= document.getElementById('numero_uno').value
    var b= document.getElementById('numero_dos').value
    var c= document.getElementById('numero_tres').value
    var d= document.getElementById('numero_cuatro').value



    if(a==b,a==c,a==d,b==c,b==d,c==d){
      
        alert("Ha ingresado Valores iguales")
    }
    else {
        var mayor = Math.max(a,b,c,d);
        var menor = Math.min(a,b,c,d);
        
        alert("El numero Mayor ingresado es: "+mayor+" El numero menor ingresado es: "+menor);
        
    }
   
    }
    