class Libreria {
  constructor (nombre, direccion, listaLibros, listaComics) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.listaLibros = listaLibros || [];
    this.listaComics = listaComics || [];
  }

  nuevoLibro (libro) {
    this.listaLibros.push(libro)
  }

  nuevoComic (comic) {
    this.listaComics.push(comic)
  }

  getInfo (obra) {
    const resultadoLibro = this.listaLibros.find(({titulo}) => titulo === obra);
    const resultadoComic = this.listaComics.find(({titulo}) => titulo === obra);

    if (resultadoLibro === undefined && resultadoComic === undefined) {
      return `No contamos con ${obra} en estos momentos`
    } else if (resultadoLibro !== undefined && resultadoComic === undefined) {
      if (resultadoLibro.getEjemplares === 0) {
        return `No hay ejemplares de ${obra} disponibles`
      } else {return resultadoLibro}
    } else {
      if (resultadoComic.getEjemplares === 0) {
        return `No hay ejemplares de ${obra} disponibles`
      } else {return resultadoComic}
    }
  }
}
class Libro {
  #cantidad;
  #anio = 0;
  constructor (titulo, autor, precio, cantidad, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.precio = precio;
    this.#cantidad = cantidad;
    this.#anio = anio;
  }

  set setEjemplares (numero) {
    this.#cantidad = numero
  }

  set setAnio (numero) {
    this.#anio = numero
  }

  get getEjemplares () {
    return this.#cantidad
  }

  get getAnio () {
    return this.#anio
  }
}
class Comic extends Libro {
  constructor (titulo, autor, precio, cantidad, anio, dibujante, editorial, volumen) {
    super (titulo, autor, precio, cantidad, anio)
    this.dibujante = dibujante;
    this.editorial = editorial;
    this.volumen = volumen;
  }
}

const libreria_uno = new Libreria ('Libreria Coronado', 'Coronado', [],[]);
const libro_uno = new Libro ('Cocina', 'Jhon Jhon', 2, 0, 2022);
const comic_uno = new Comic ('difficult', 'Jhon Jhon', 2, 123, 2022);
libreria_uno.nuevoLibro(libro_uno);
libreria_uno.nuevoComic(comic_uno);
console.log(libreria_uno.getInfo('Cocina'));