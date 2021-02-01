
//Declaramos una funcion
const doSomethingAsync = () =>{

  //retornamos una promesa
  return new Promise((resolve, reject)=>{

    //hacemos un condicional para recibir la respuesta resuelta o no respuesta de nuestra promesa
    if(true){

      setTimeout(()=>{

        resolve('Do something Async')
      }, 3000)

    }else{

        reject(new Error('Test Error'))

    }


  });
}

//Declaramos una funcion y le pondremos la palabra reservada async
 //Para inficar que trabajaremos con async await
const doSomething = async () =>{

  //Declaro una constante la cual le indicamos la palabra await en la cual decimos
   //Que estamos a la espera de la ejecucion de la funcion que le indicamos
  const something = await doSomethingAsync()
    //Mostramos en consola el resultado de esa funcion
  console.log(something);


}

console.log('Before');
doSomething();
console.log('After');

 //Capturar Errores con try catch 
  //Hacemos lo mismo que en la funcion anterior pero utilizando try catch

  const anotherFunction = async () => {

    try{

      const something = await doSomethingAsync()
      console.log(something);

    }catch(error){

      console.log(error)

    }


  }

  //Invocamos nuestra funcion nueva
    console.log('Before 1');
    anotherFunction();
    console.log('After 2');