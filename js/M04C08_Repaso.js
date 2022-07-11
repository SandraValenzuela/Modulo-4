//cargar elementos de html
//funcion: document.querySelector
//por nombre(etiqueta), por id(#) o por clase(.)

//carga del formulario
let formulario = document.querySelector=("#formulario");
console.log(formulario);
//carga del campo de texto (input de tipo text)
let texto = document.querySelector("#texto");
console.log(texto);

//carga del boton
let boton = document.querySelector("#boton");

//cargar varios elementos al mismo tiempo
//let parrafo=document.querySelector("p");// carga un elemento el primero que encuentra
let parrafo=document.querySelectorAll("p"); // carga TODOS los parrafos

//---------------------------
//MODIFICAR elementos html
//texto
let p=document.querySelector("p");
p.innerText= "texto cambiado mediante JS!!!";

//cambiar el texto del boton
boton.innerText= "Ejacutar";


//class CSS
p.setAttribute("class", "fondoAzul");
p.className= "fondoAzul";
p.classList.add("fondoAzul");


//atributos
texto.setAttribute("disabled","");
texto.removeAttribute("disabled");

//--------------------------
//3.- DARLE EVENTOS A LOS ELEMENTOS HTML
//addEvenlistener
//click, moseover, mouseleave, submit, keydownkeyup, load, etc...

//click en el primer parrafo:
p.addEventListener("click", function(e){
    p.className="fondoBlanco";
})

//cargar el div y cambiar el fondo al hacer el click
let div=document.querySelector("div");
div.addEventListener("click",function(e){
    div.className="fondoAzul";
})

//enviar mensaje a pantalla (con alert) cuando se haga click en el boton


boton.addEventListener("click",function(e){
    SubtleCrypto("click!");
})

//cuando pasemos el mouse encima del input: text cambia el fondo a azul
//cuando saquemos el mouse, cambia el fondo a blaco
texto.addEventListener("mouseover",function(e){
    texto.className="fondoAzul";
})

texto.addEventListener("mouseout", function(e){
    texto.className="fondoBlanco";
})
//---------------------------
//4.- CREACIÓN DE NUEVOS ELEMENTOS
//document.createElement

//crear un parrafo
let nuevoParrafo = document.createElement("p");

//crear un nuevo input
let nuevoTexto = document.createElement("input");

//crear un nuevo div
let nuevoDiv = document.createElement("div");

//ahora se aplica el paso 2, modificar el elemento
//modificar parrafo nuevo (texto)
nuevoParrafo.innerText="nuevo texto";

//Modificar el input(atributo)
nuevoTexto.setAttribute("type", "text");

//modificar el fondo del div
nuevoDiv.className="fondoAzul";

//---------------------------
//5.- AGREGAR ELEMENTOS RECIEN CREADOS(MEDIANTE CODIGO)
//appenChild, prependChild
//contenedor.appendChild(hijo);

//agregar el nuevo parrafo al div existente
div.appendChild(nuevoParrafo);

//agregar el input al formulario
formulario.appendChild(nuevoTexto);

//agregar el nuevo parrafo al nuevo div
nuevoDiv.appendChild(nuevoDiv);

//--------------------------
//6.- ELIMINAR ELEMENTOS
//removChild(elemento a eliminar)

//eliminar el primer parrafo del div
div.removeChild(p);

//eliminar
document.body.removeChild(nuevoDiv);

//eliminar el texto input
formulario.removeChild(texto);


