// 1. Crear una clase Persona que reciba nombre, apellido, id, edad y ubicación.
// Agregar un método que se llame saludar, y que retorne un saludo con el nombre y apellido de la persona.
class Persona {
  constructor (nombre, apellido, id, edad, ubicacion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = id;
    this.edad = edad;
    this.ubicacion = ubicacion
  }
  
  saludar () {
    return `Hola, me llamo ${this.nombre} ${this.apellido}`;
  }
}

// 2. Crear una clase Empleado que herede de Persona y reciba un parámetro sueldo, posición, departamento, ingreso.
// Agregar un método que se llame imprimirSueldo, que imprima el sueldo anual del empleado.
class Empleado extends Persona {
  constructor (nombre, apellido, id, edad, ubicacion, sueldo, posicion, departamento, ingreso) {
    super (nombre, apellido, id, edad, ubicacion)
    this.sueldo = sueldo;
    this.posicion = posicion;
    this.departamento = departamento;
    this.ingreso = ingreso;
  }

  imprimirSueldo () {
    return this.sueldo * 12;
  }
}

// 3. Crear una clase Desarrollador que herede de Empleado, Desarrollador debe recibir un parámetro llamado lenguajes
// (tiene que ser un array de objetos): debe incluir nombreDeLenguaje y conocimiento (es un valor numérico del 1 al 100).

// 4. Agregar un método se llame lenguajeDominado y que imprima el lenguaje que domina el desarrollador:
// el lenguaje que domina depende del valor que tenga en la propiedad conocimiento, de manera que se imprimar le lenguaje con mayor valor numérico.
// 
// 5. Agregar un método que se llame agregarLenguaje para agregar un nuevo lenguaje al array de lenguajes.
class Desarrollador extends Empleado {
  constructor (nombre, apellido, id, edad, ubicacion, sueldo, posicion, departamento, ingreso, lenguajes) {
    super (nombre, apellido, id, edad, ubicacion, sueldo, posicion, departamento, ingreso)
    this.lenguajes = lenguajes || [];
  }

  lenguajeDominado () {
    let dominado = {nombreLenguaje: '', conocimiento: 0};
    for (let i = 0; i < this.lenguajes.length; i ++) {
      if (this.lenguajes[i].conocimiento > dominado.conocimiento) {
        dominado = this.lenguajes[i]
      }
    }
    return dominado;
  }

  agregarLenguaje (nombreLenguaje, conocimiento) {
    this.lenguajes.push({nombreLenguaje, conocimiento})
  }
}


const andy = new Desarrollador ('Andy', 'Smith', '1234567', '22', 'Cartago', 100, 'programador', 'Back End');
andy.agregarLenguaje('JavaScript', 45);
andy.agregarLenguaje('Python', 80)
andy.agregarLenguaje('Java', 93)
console.log(andy.saludar())
console.log(andy.imprimirSueldo())
console.log(andy.lenguajeDominado())