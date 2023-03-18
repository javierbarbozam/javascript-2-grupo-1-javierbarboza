import Bookstore from './modules/Bookstore.js';
import Book from './modules/Book.js';
import Comic from './modules/Comic.js';

(function () {
  const bookstore1 = new Bookstore('Libreria 1', 'Calle 1');
  const sidebar = document.getElementById('sidebar');
  const menu = ['Show Books', 'Show Comics', 'Add book', 'Add Comic'];

  const initialize = () => {
    printBookstoreName();
    displayMenu();
    menuFunctionality();
  }
  
  const printBookstoreName = () => {
    sidebar.insertAdjacentHTML(
      'afterbegin',
      `<h2 class="title">
        <img src="./img/logo.svg" class="logo"/>
        ${bookstore1.getName}
      </h2>`
    )
  }
  
  const createMenu = () => {
    let menuHtml = '';
    menu.forEach((elem, index) => {
      menuHtml += `<li class="menu-item"> 
        <a href="#" id="${index}">${elem}</a>
      </li>`
    });
  
    return menuHtml;
  }
  
  const displayMenu = () => {
    sidebar.insertAdjacentHTML(
      'beforeend',
      `<ul class="menu">${createMenu()}</ul>`
    );
  }
  
  const menuFunctionality = () => {
    const items = document.querySelectorAll('.menu-item');
    items.forEach((item) => {
      item.addEventListener('click', (event) => {
        // e.stopPropagation(); // esto es para evitar que el evento se extienda/propague al los elementos padres
        event.preventDefault(); // esto es para evitar que se recargue la página cuando se hace click en el elemento, en este al elemeto li del menu
  
        const { id } = event.target
  
        switch (id) {
          case '0':
            showBooks();
            break;
          case '1':
            showComics();
            break;
          case '2':
            addBooks();
            break;
          case '3':
            addComics();
            break;
          default:
            console.log('That option does not exist');
            break;
        }
      });
    });
  }
  
  
  const showBooks = () => {
    console.log('Show Books');
    console.log(bookstore1.getBooks)
    const books  = bookstore1.getBooks;
  }
  
  const showComics = () => {
    console.log('Show Comics');
    console.log(bookstore1.getComics)
  }
  
  const addBooks = () => {
    const title = prompt('Title');
    const author = prompt('Author');
    const price = prompt('Price');
    const stock = prompt('Stock');
    const year = prompt('Year');
  
    const book = new Book(title, author, price, stock, year);
    bookstore1.setBooks = book.getInfo();
  }
  
  const addComics = () => {
    console.log('Add Comics');
  }
  
  initialize();
})();