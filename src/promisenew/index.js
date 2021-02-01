
//declaramos una funcion
const somethingWillHappen = () => {

    //retornamos una promesa
     //lepasmos una funcion a la promesa la cual ejecutara esta promesa
      // Con lo que va a suceder que no sabemos exactamente cuando
      //Los patametros de la promesa son propios de ella 
        //Resolve si se resuelve la promesa
        //Reject si es rechazada la promesa
    return new Promise((resolve,reject)=>{

        //Para probar la promesa utilizamos if
        //En caso de que la peticion o aquello que ejecutemos se ejecute

        if(true){
            //se resuelve
            resolve('hey!!');
        }else{
            //no se resuelve  manda error
            reject('paila ome')
        }




    })
}

//Ejecutamos la funcion

somethingWillHappen()
//Encadenamos el .then para obtener la respuesta de la promesa
    .then(response => console.log(response))
    //En dado caso de que hubiera un error con .catch recibimos el resolve de la promesa
    .catch(error => console.log(error))


const somethingWillHappen2 = () =>{

    return new Promise((resolve,reject) =>{

        if(true){

            setTimeout(()=>{

                resolve('True')

            },2000)
        }else{

            const error = new Erro('Whooop!');
        }

    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    //podremos encadenar + thens
    .then(()=> console.log('hola'))
    .catch(err => console.log(err))

// Para crear varias promesas encadenas utizamos Promise.all

// estamos utilizando el metodo all dentro de promise el cual
// va a correr un arreglo de promesas
// y nos regresara un arreglo con la respuesta de ambas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('array of results', response);
    })
    .catch(err =>{

        console.log(err)
    })