//creamos un callback el cual vamos a ejecutar dentro de otra funcion

//declaramos una funcion que retornara una suma de dos numeros
function suma(num1, num2){

    return num1 + num2;


}

//declaramos una funcion que hara un calculo
// le pasamos por parametro num1 y num2 y un callback (otra funcion)
function calc(num1, num2, callback){

    // lo que hacemos es retornar el callaback con nuestros dos parametro num1 y num2
    return callback(num1,num2)
}

//imprimimos el resultado de la funcion la invocamos y le pasamos por patametro
//los numeros con los cuales realizara el calculo y como 3 parametro
//un callback que en este caso es nuestra funcion sum
console.log(calc(2,2,suma)); //4


//Declaramos una funcion que recibe por parametro un callback
function date(callback){

    // imprimimos fecha actual
    console.log(`${new Date} a`);

    //utilizamos las funcion setTimeOut para imprimir  una nueva fecha
    setTimeout(function(){

        let date = `${new Date} b`;
        callback(date);
    },3000)
}

//declaramos una funcion la cual recibe una fecha por parametro

function printDate(dateNow){

    //imprimimos esa fecha
console.log(dateNow);

}

//invocamos a la funcion date y le pasamos por parametro nuestra funcion 
// la cual imprimira el valor que se le pase por parametro

date(printDate);