// uso de jquery
$(document).ready(function(){

    $("#ConvertirCF").click(convertircelfar);
	$("#ConvertirFC").click(convertirfarcel);


    function convertircelfar() {
        var Centígrados = $("#valor1").val();
        var convertircelfar = 1.8 * Centígrados + 32
        $("#res").html(convertircelfar);
    }
    function convertirfarcel() {
        var Fahrenheit = $("#valor1").val();
        var convertirfarcel = Fahrenheit - 32/1.8
        $("#res").html(convertirfarcel);
    }

});