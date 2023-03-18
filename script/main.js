// Modules import

import Bookstore from "./modules/Bookstore.js";
import Book from "./modules/Book.js"
import Comic from "./modules/Comic.js";
import {bookForm, comicForm} from "./modules/Form.js";

// Global variables

const libromania = new Bookstore ('Libromanía', 'Santo Domingo de Heredia')
const mainContent = document.getElementById('main-content')
const sidebar = document.getElementById('sidebar');


// Printing Menu
const createMenu = () => {
  const menu = ['Show Books', 'Show Comics', 'Add book', 'Add Comic'];
  let menuElement = '';
  menu.forEach((item) =>{
    menuElement +=
    `<li id="${item.replace(/\s+/g, '')}" class="menu-item">${item}</li>`
  })

  sidebar.insertAdjacentHTML (
    'beforeend',
    `<ul class="menu">${menuElement}</ul>`
  )
}
createMenu()

// Printing Bookstore name
const bookstoreName = () => {
  sidebar.insertAdjacentHTML(
    'afterbegin',
    `<h1 class="title">${libromania.GetName}</h1>`
  )
}
bookstoreName()

const menuFunctionality = () => {
  const items = document.querySelectorAll('.menu-item');
  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      const { id } = event.target

      switch (id) {
        case 'ShowBooks':
          showBooks();
          break;
        case 'ShowComics':
          showComics();
          break;
        case 'Addbook':
          addBooks();
          break;
        case 'AddComic':
          addComics();
          break;
        default:
          console.log('That option does not exist');
          break;
      }
    });
  });
}
menuFunctionality()

const addBooks = () => {
  mainContent.innerHTML = "";
  mainContent.insertAdjacentHTML (
    "afterbegin",
    `<form action="">
      ${bookForm()}
      <input type="button" class="form-btn" id="addBook-btn" value="Agregar Libro">
      </form>`
  )

  const bookBtn = document.getElementById('addBook-btn') 
  bookBtn.addEventListener('click', (event) => {
    event.preventDefault()

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let price = document.getElementById('price').value;
    let stock = document.getElementById('stock').value;
    let year = document.getElementById('year').value;

    // Validate filled inputs
    if (title === '' || author === '' || illustrator === '' || publisher === '' || price === '' || stock === '' || year === '') {
      alert('Por favor ingrese la información del Libro completa.')
      return;
    } else {
      const book = new Book (title,author,price,stock,year)
    libromania.SetBooks = book.getInfo();
    }
  })
}

const addComics = () => {
  mainContent.innerHTML = "";
  mainContent.insertAdjacentHTML (
    "afterbegin",
    `<form action="">
      ${comicForm()}
      <input type="button" class="form-btn" id="addComic-btn" value="Agregar Comic">
      </form>`
  )

  const comicBtn = document.getElementById('addComic-btn') 
  comicBtn.addEventListener('click', (event) => {
    event.preventDefault()

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let price = document.getElementById('price').value;
    let stock = document.getElementById('stock').value;
    let year = document.getElementById('year').value;
    let illustrator = document.getElementById('illustrator').value;
    let publisher = document.getElementById('publisher').value;
    let volume = document.getElementById('volume').value;
    
    // Validate filled inputs
    if (title === '' || author === '' || illustrator === '' || publisher === '' || price === '' || stock === '' || year === '' || illustrator === '' || publisher === '' || volume === '') {
      alert('Por favor ingrese la información del Comic completa.')
      return;
    } else {
      const comic = new Comic (title,author,price,stock,year,illustrator,publisher,volume)
      libromania.SetComics = comic.getInfo();
    }
  })
}

// Profe no entiendo por qué en este paso la propiedad "Author" pierde la H. Revisé el contructor y está bien escrito.
const showBooks = () => {
  mainContent.innerHTML = "";

  // Getting access to all books
  let books = libromania.GetBooks
  let booksHTML = '';
  books.forEach((item) => {
    booksHTML +=
    `<ul class="grid-info-item">
      <span class="grid-info-item-title">${item.title}</span>
      <li>Autor: ${item.auhor}</li>
      <li>Precio: $${item.price}</li>
      <li>Cantidad ${item.stock}</li>
      <li>Año ${item.year}</li>
    </ul>`
  })

  // Printing books
  mainContent.insertAdjacentHTML (
    'afterbegin',
    `<div class="grid-info">
      ${booksHTML}
    </div>`
  )
}

const showComics = () => {
  mainContent.innerHTML = "";

  // Getting access to all comics
  let comics = libromania.GetComics
  let comicsHTML = '';
  comics.forEach((item) => {
    comicsHTML +=
    `<ul class="grid-info-item">
      <span class="grid-info-item-title">${item.title}</span>
      <li>Autor: ${item.auhor}</li>
      <li>Precio: $${item.price}</li>
      <li>Cantidad: ${item.stock}</li>
      <li>Año: ${item.year}</li>
      <li>Dibujante: ${item.illustrator}</li>
      <li>Editorial: ${item.publisher}</li>
      <li>Volumen: ${item.volume}</li>
      </ul>`
  })

  // Printing books
  mainContent.insertAdjacentHTML (
    'afterbegin',
    `<div class="grid-info">
      ${comicsHTML}
    </div>`
  )
}



// 2. Verificar que los datos sean válidos, es decir, que no se agreguen comics o libros a las listas correspondientes si el usuario manda valores nulos o vacíos.

// 3. Agregar validación para evitar que se agreguen libros o comics repetidos, debe mostrar un mensaje (puede ser un alert) indicando que el libro o comic no se pudo ingresar porque ya existe.

// ** 7. Puntos extras si se crear un formulario, desde JavaScript, para solicitar al usuario la información del libro o comic a la hora de agregar dichos elementos: 3%. (Se tomara en cuenta lo aprendido en clase y buenas prácticas de manera que el código se pueda reutilizar para agregar un libro o un comic según corresponda.)


