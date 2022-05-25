






//funcion flecha

// Funcion tradicional
function escribir(texto){
    console.log(texto);
}
escribir("hola");

//Funcion flecha
var f = texto=>console.log(texto);
f("hola");



//ejemplo 2 - funcion que devuelve el cuadrado de un numero
//version tradicional
function cuadrado(num){
    return num*num;
}
console.log(cuadrado(5));

// en version flecha
var s = num=>num*num;
console.log(s(5));

//ejemplo 3 - funcion sin parametros
//version tradicional
function saludar(){
    console.log("hola");
}
saludar();

//version flecha
f=()=>console.log("hola");
f();

//ejemplo 4 - funcion con mas de un parametro
function mostrarPersona(nombre, apellido){
    console.log(nombre+ " "+apellido);
}
mostrarPersona("denis","pacheco");

//version flecha
let m =(n,a)=> console.log(n+" "+a);
m("alejandra","ruiz");

//construccion de una flecha
//(parametro1, par2,par3,pa4,etc....)=>{instruccion1,instruccion2,instuccio3... retorno}
//si hay un parametro, se pueden omitir los parentesis
//si hay una instruccion, se pueden omitir las llaves

//por ejemplo
var notas= [6.5, 5.4, 3.0, 7.0];

//mostrar los numeros en pantalla 
//con un for tradicional
/*FormData (let i=0; i< notas.length; i++){
    console.log(notas[i]);
}
console.log("---------------");*/

// con map y funcion flecha
notas.map(n=>console.log(n));
var notasCopia=notas.slice();  // crea una copia del arreglo original
// supongamos que quiero subir dos decimas a cada nota en el arreglo
// con un FOR tradicional
for(i=0; i=notas.length; i++){
    notas [i]=notas[i]+0.2;
}
console.logtable(notas);

//con map
notasCopia=notasCopia.map(n=>n+0.2);
console.table(notasCopia);

//----------------------------------
console.log("----------------------")
//spred: ...

function concatenar(a,b,c){
    console.log(a+":" +b+ ":" +c);
}

var palabras=["hola", "que", "tal", "festival"];

//version clasica
concatenar(palabras[0],palabras[1],palabras[2]);

//version ES6
concatenar(...palabra); //convierte cada uno de los elementos del arreglo en un elemnto individual