// Values from Book and Comic constructor

const bookValues = ['title', 'author', 'price','stock','year'];
const comicValues = ['illustrator', 'publisher', 'volume'];

const bookForm = () => {

  let formElement = '';

  bookValues.forEach((item) => {

    // Values to Spanish
    let title = ''; 
    switch (item) {
      case 'title':
        title = 'título';
        break;
      case 'author':
        title = 'autor';
        break;
      case 'price':
        title = 'precio';
        break;
      case 'stock':
        title = 'cantidad';
        break;
      case 'year':
        title = 'año'
        break;
      default:
        console.log(Error)
    }

    // Add HTML elements to variable

    // First IF creates Type Number inputs
    if (title === 'precio' || title === 'cantidad' || title === 'año') {
      formElement +=
      `<label for="${item}">${title.charAt(0).toUpperCase() + title.slice(1)}</label>
      <input type="number" id="${item}" placeholder="Inserte ${title} de la obra">`
    } else {
      formElement +=
      `<label for="${item}">${title.charAt(0).toUpperCase() + title.slice(1)}</label>
      <input type="text" id="${item}" placeholder="Inserte ${title} de la obra">`
    } 
  })

  return formElement
}

const comicForm = () => {

  let formElement = bookForm();
  comicValues.forEach((item) => {

    //Values to Spanish
    let title = ''; 
    switch (item) {
      case 'illustrator':
        title = 'dibujante';
        break;
      case 'publisher':
        title = 'editorial';
        break;
      case 'volume':
        title = 'volumen';
        break;
      default:
        console.log(Error)
    }

    // Add HTML elements to variable

    // First IF creates Type Number inputs
    if (title === 'volume') {
      formElement +=
      `<label for="${item}">${title.charAt(0).toUpperCase() + title.slice(1)}</label>
      <input type="number" id="${item}" placeholder="Inserte ${title} de la obra">`
    } else {
      formElement +=
      `<label for="${item}">${title.charAt(0).toUpperCase() + title.slice(1)}</label>
      <input type="text" id="${item}" placeholder="Inserte ${title} de la obra">`
    } 
  })

  return formElement
}

export { bookForm, comicForm }