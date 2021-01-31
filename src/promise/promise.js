

const asincronisPromise = () => {

 return new Promise((resolve, reject) =>{
 
 if(true){
  console.log('Heeyyy!!!');
  resolve()
 }else{
  console.log('F se daño')  ;
  reject()
 }
 
})

}

asincronisPromise()
 .then(response => console.log(response))
 .catch(error => console.log(error))