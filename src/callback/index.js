const suma = (num1,num2) =>{

return num1 + num2;

}

const calcular = (num1, num2, callback) =>{

    return callback(num1, num2)



}

console.log(calcular(2, 2, suma));