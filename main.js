function parImpar (number) {
  return new Promise (function(resolve, reject){
    number%2===0?resolve(`${number} es par`):reject(`${number} es impar`)
  })
}

parImpar(3)
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    console.log(error)
  })