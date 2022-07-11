


















//seleccionar la lista ul
$("#lista").css("color","violet");
//cambio el color de fondo solo a los hijos
("#lista").children().css("bakground-color",black);

//desafio
//cambiar sl color de fondo solo a los hijos
$("#segundo").children().css("background-color","black");

//cambiar el color de fondo a azul solo a los elementos impares de la lista ul 
//con funcion
$("li").even().css("background-color","blue");
//con pseudoselector
$("li:odd").css("background-color","yellow");

//equivalente a un for (i=0;I<coleccion li.length;i++)
$("ul").children().each(function(i,e){
    $(e).text(i);
})
//------------------------------
//CREACION DE ELEMENTOS
//ejemplo clonar el primer elemento de la lista y agregarlo al final
$("ul li:first").clone().appendTo("ul");
//en js para crear un elemento se usa:
//document.createElemento(p);
//su equivalente en jquery seria:
let nuevoElemento=$("<p>nuevo elemento </p>");
//insertarlo en el div segundo
$("#segundo").append(nuevoElemento);
//es equivalente a 
$("<p>nuevo elemento 2</p>").appendTo("#segundo");
//crear un tercer div (con titulo y parrafo),
//y agregarlo despues del segundo y antes de la lista
$("<div id=tercero><h1>titulo 3</h1></p></div>").innertAfter("#segundo");
//como resumen, para insertar elementos tenemos:
//insert after y Before
//append y peappend

//ELIMINAR
//eliminar el segundo elemento de la lista
$("ul li:first").next().remove();

//vaciar la lista
//$("ul").empty(); // comentar para ver resultado

//metodo 1 para el mouseenter, implementar la funcion
$("#segundo").mouseenter(function(){
    $("#segundo").css("background-color","red");
});

//metodo 2 con funcion aparte
function cambiarFondo(){
    $("#segundo").css("background-color", "white")
}


