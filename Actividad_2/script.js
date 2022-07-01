function sumar(){

var papeleria=20000
var carnet=8000
var descuento
var total

var nombre_estudiante = document.getElementById('nombre').value;
var num_materias = document.getElementById('cantidad_materias').value;
var precio_asignatura = document.getElementById('valor_asignatura').value;

alert ("El Nombre del estudiante es: "+nombre_estudiante+" El Numero Ingresado de materias es: "+num_materias+ " Y el Valor de cada materia es de : $"+precio_asignatura);

total=num_materias*precio_asignatura+papeleria+carnet;

alert ("El total seria de : $"+total)

descuento=total*0.20

alert("Se le Hara un descuento del 20% lo que equivaldria a: $"+descuento)

total=total-descuento

alert("Estudiante: "+nombre_estudiante+" El total a cancelar con el descuento es de: $"+total)



}