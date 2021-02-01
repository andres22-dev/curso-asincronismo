const fetchData = require('../utils/fetchDara');

const API = 'https://rickandmortyapi.com/api/character/';


//Lo que hacemos con async y await es esperar a que las peticiones ocurran
  //Luego almacenamos esto en unas variables y luego imprimimos lo que queremos obtener


const anotherFunction = async () =>{

    try{

        //realizamos los tres llamados
         //1. numero de personajes
          //2 . Nombre del perosanje
            //3. Dimension en la que vive
        const respuesta = await fetchData(API);
        const respuesta2 = await fetchData(API+1);
        const respuesta3 = await fetchData(respuesta2.origin.url);
        console.log(respuesta.info.count);
        console.log(respuesta2.name);
        console.log(respuesta3.dimension);

    }catch(error){

        console.log(error);

    }


}

anotherFunction();