//hacemos un require de fetchDara para importar nuestro archivo donde estan las peticiones

// Recap
 // 1. refactorizamos el codigo de callbacks para que funcionara con promesas
const fetchData = require('../utils/fetchDara');
 //2 Traermos el link de la api
const API = 'https://rickandmortyapi.com/api/character/';

//3 Invocamos a la funcion y le pasamos la url
  //luego empezamos a encadener .then y retornando la siguiente peticion con nuetra funcion
  fetchData(API)
  .then(response =>{
      //imprimimos la respuesta de nuestra peticion
      console.log(response.info.count)
      //retornamos otra invocacion de nuestra funcion que hace peticiones
       //Para seguir obteniendo valores
      return fetchData(`${API}${response.results[0].id}`);
  })
  .then(response => {

    console.log(response.name);
    return fetchData(response.origin.url)
  })
  .then(response =>{

    console.log(response.dimension)
  })
  .catch(err => { console.log(console.err)})
