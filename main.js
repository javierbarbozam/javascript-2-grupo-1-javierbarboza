// Escriba una function que escriba un número a la inversa

function numeroReversa(value) {
  number = value.toString();
  newNumber = "";

  for (let i = number.length - 1; i >= 0; i--) {
    newNumber += number[i];
  }

  return Number(newNumber);
}

console.log(numeroReversa(123));


// Escriba una function que acepte un string como parámetro y convierta cada
// primer letra de cada palabra en mayúscula


function toUpperCase(phrase) {
  let value = phrase.split(" ");
  for (i = 0; i < value.length; i++) {
    value[i] = value[i].split("");
    let firstLetter = value[i].shift();
    value[i].unshift(firstLetter.toUpperCase());
    value[i] = value[i].join("");
  }

  phrase = value.join(" ");

  return phrase;
}

console.log(toUpperCase("hola esto es una prueba"));

/// Segunda forma de solucionarlo ///

function mayuscula(phrase) {
  value = phrase.split(" ");
  for (i = 0; i < value.length; i++) {
    value[i] = value[i][0].toUpperCase() + value[i].substr(1);
  }

  return (phrase = value.join(" "));
}

console.log(mayuscula("esta es una frase de prueba"));
