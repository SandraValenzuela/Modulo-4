//URL base,nunca cambia para reqres
const urlBase= "https://reqres.in/api/"
//GET mas Basico
async function leerUsuario(){
    let respuesta = await fetch("https://reqres.in/api/users/100")
    console.log(respuesta)

    if(respuesta.ok){
        let datos = await respuesta.json()
        console.log(datos);
    }else{
        console.log("datos no encontrados");
    }
}
//GET variable
async function leerUsuario(id){
    let respuesta = await fetch(urlFinal)
    urlFinal=urlBase+"users/"+id;
    console.log(respuesta)

    if(respuesta.ok){
        let datos = await respuesta.json()
        console.log(datos);
    }else{
        console.log("datos no encontrados");
    }
}
//----------------------------------------------
//leerUsuario
leerUsuario(2);






let usuario2={
    id:10,
    name:"alexis",
    job:"Desarrollador"
}

async function actualizarUsuario(user){
    urlFinal=urlBase+"users/"+usuario.id
    let respuesta = await fetch(urlFinal,{
        method:"PUT",
        headers:{"content-type": "aplication/jason"},
        body:JSON.stringify(usuario)
    })
    console.log(respuesta);
    let datos= await respuesta.json();
    console.log(datos);
}

actualizarUsuario(usuario2)