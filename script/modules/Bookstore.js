class Bookstore {
  #name;
  #address;
  #books;
  #comics;
  constructor (name, address) {
    this.#name = name;
    this.#address = address;
    this.#books = [];
    this.#comics = [];
  }

  // getters

  get GetBooks () {
    return this.#books
  }

  get GetComics () {
    return this.#comics
  }

  get GetName () {
    return this.#name
  }

  // setters

  set SetBooks (book) {
    this.#books.push(book)
  }

  set SetComics (comic) {
    this.#comics.push(comic)
  }
}

export default Bookstore;