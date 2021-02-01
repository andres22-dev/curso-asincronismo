
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


let API = 'https://rickandmortyapi.com/api/character/';

//Como utilizamos promise actualizamos nuestro codigo a es6

//Definimos la funcion como arrow function

const fetchData   = (urlApi) => {
  //retornamos una promesa con resolve y reject
  return new Promise((resolve,reject)=>{
    //asignamos esto a una constante
    const xhttp = new XMLHttpRequest();
      xhttp.open('GET',urlApi, true);
      //Volvemos esto un arrow function
      xhttp.onreadystatechange = (() =>{
        if(xhttp.readyState === 4){ 
          //Cambiamos este if porque el anterior trabajaba con el callback
            //Ahora ponemos dentro el if que eso quiere decir que se resolvio nuestra promesa
             // Un resolve y en else un reject para recibir el error
              // al revolve le generamos un error con newError('mensaje', de que parte va a generar el error)
          if(xhttp.status === 200){
            if(true){
              resolve(JSON.parse(xhttp.responseText))
            }else{
              reject(new Error('Error', urlApi));
            }
          }
        }
      });    
    xhttp.send();
    });
  }
   
  //Exportamos el modulo utilizando node

  module.exports = fetchData;