// instanciamos la dependencia xmlhttprequest
// utilizamo el metodo require y luego llamamos al paquete
// y luego lo instanciamos
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//No trabajaremos con fetch ya que este por dentro proporcina promesas
// Y en este caso trabajaremos con callbacks

//url api donde hare la peticion
let API = 'https://rickandmortyapi.com/api/character/';

const fetchData   = (urlApi, callback) => {

    // Este elemento fue creado por microsoft  para empresas y es parte del aporte que hizo a este lenguaje

    //Instanciamos la conexion
    let xhttp = new XMLHttpRequest();
    // Hacemos el llamado a una url
      // pasamos el tipo de peticion - segun parametro el url de la api y 
        //el tercero activa el asincronismo por defecto es true pero podemos indicarlo si queremos
    xhttp.open('GET',urlApi, true);
        //vamos a escuchar un evento que valida que se este realizando el llamado
    xhttp.onreadystatechange = function(event){

         // el estado en que se encuentra la peticion
        if(xhttp.readyState === 4){

            // status de la conexion

            if(xhttp.status === 200){

                //el primer valor es el error, en el segundo el parseo de la peticion a json
                // si no lo pasamos de esta forma solo estaremos pasando un string
                callback(null, JSON.parse(xhttp.responseText))
            }else{

                const error = new Error('Error'+ urlApi);
                return callback(error, null)

            }
        }


    }
  //enviamos la solicitud
    xhttp.send()


}


fetchData(API, function(error1, data1){

    //capturamos el error
    if(error1) return console.error(error1)

    //realizamos la peticion para traer el id de mi personaje
    fetchData(API + data1.results[0].id, function(error2, data2){

        
        if(error2) return console.error(error2)

        //realizamos otra peticion para traer el origen de mi personaje
        fetchData(data2.origin.url, function(error3, data3){

            if(error3) return console.error(error3)

            // imprimimos el resultado de mis peticiones
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })


    })

})