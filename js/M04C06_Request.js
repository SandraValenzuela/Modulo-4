// Crear una url
var url1=new URL("https://www.google.cl/search?q=animales");
console.log(url1);

var url2=new URL("search","https://www.google.cl/");
url12.searchParams.append("q","animales");
console.log(url2);


var url3=new URL("search","https://www.google.cl/");
url3.searchParams.append("q","ñandú");
console.log(url);
//https//www.google.cl/search?q=%C3%B1and%C3%BA

//pokemon: construir la url para traer
//los datos de los primeros 100 pokemos (pokeAPI https://pokeapi.co)

pokeurl=new URL("pokemon","https://pokeapi.co/api/v2");

//agregar parametros
pokeUrl.searchParams.append("limit","100");
pokeurl.searchParams.append("offset","0");
console.log(pokeurl);

//obtener el valor de un parametro
console.log(pokeUrl.searchParams.get("limit"));

//obtener si los parametros existen o no en la url
console.log(pokeUrl.searchParams.has("offset"));//true
console.log(pokeUrl.searchParams.has("name"));//false

//-------------------------------
//solicitudes hacia APIs (similar al fetch)
//creamos un objeto request
var request=new XMLHttpRequest();

//agregar evento para cuando la respuesta llegue
request.addEventListener("load",function(e){
    console.log("listo!!");
    console.log("status code:" + request.status);
    console.log("status:" + request.statusText);
    console.log("reponse:" + request.response);
    console.log("texto response" + request.responseText);
})
//implementar el evento para cuando cambie el estado de la request
request.onreadystatechange=function(){
    if(request.readyState==3){
        console.log("loading");
    }else if(request.readyState==4){
        console.log("finalizado");
        console.log(request.response);
    }
}
//inicializar
request.open("GET","https://dog.ceo/api/breeds/image/random", true);

//ejecutar
request.send();