$(document).ready(function(){
    $("#sumar").click(
        function(){
            var num1 = parseInt($("#num1").val());
            var num2 = parseInt($("#num2").val());
            var suma = num1+num2
            
            $("#resultado").val(suma)
        }
    );
    $("#ocultar").click(function(){
        $("#sumar").hide(1500);
    });
    $("#mostrar").click(function(){
        $("#sumar").show(1500);
    });
}
);

