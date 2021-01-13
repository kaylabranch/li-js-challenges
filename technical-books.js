import Book from './available-books.js';

// Create a technical book class that inherits from Book in available-books.js
// Will take same properties but include Edition
class TechnicalBook extends Book {
    constructor(title, author, isbn, numCopies, edition) {
        super(title, author, isbn, numCopies);
        this.edition = edition;
    }

    // Will include a getEdition function which returns a string:
    // 'The current version of this book is ${edition}
    get getEdition() {
        return `The current version of this book is ${this.edition}`;
    }
}