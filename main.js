function parImpar (number) {
  return new Promise (function(resolve, reject){
    number%2===0?resolve(`${number} es par`):reject(`${number} es impar`)
  })
}

console.log(parImpar(3))