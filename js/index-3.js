// var valores = []; // arreglo (array) para valores

// valores = [23, 45, 34, 12, 34]; // definiendo valores, usar corchetes []

// valores.push(86); // agregando valores

// recorriendo por el arreglo
// la variable i representa el índice
/*
for(var i=0; i < valores.length; i++) {
	// escribir valor
	document.write(valores[i] + "<br>");
}
*/

// limpiando arreglo
// valores = [];


// uso de jquery
$(document).ready(function(){

	$("#agregar").click(Agregarv);

	$("#limpiar").click();

	$("#sumatoria").click();

	$("#promedio").click();

	$("#mayor").click();

    var valores = []

    function Agregarv() {
        var valoresa = ["#valor1"].val();
        var etiq = $('<li>0</li>');
        valores = ["#valor1"];
        valores.push(valoresa);
        etiq.appendTo("ul");
        $("#res").html(Agregarv);
    }


});