import Book from './Book.js';

class Comic extends Book {
  #illustrator;
  #publisher;
  #volume;
  constructor(title, author, price, stock, year, illustrator, publisher, volume) {
    super(title, author, price, stock, year);
    this.#illustrator = illustrator;
    this.#publisher = publisher;
    this.#volume = volume;
  }

  getInfo () {
    const info = super.getInfo();  // Call GetInfo function from Book class
    return {
      ...info,
      illustrator: this.#illustrator,
      publisher: this.#publisher,
      volume: this.#volume
    }
  }
}

export default Comic;

