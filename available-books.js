// Develop inventory application for a bookstore

// Create a book class
// Title, Author, ISBN, numCopies
class Book {
    constructor(title, author, isbn, numCopies) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.numCopies = numCopies;
    }

    // Get book's availability
    // getAvailability() => "out of stock" if 0, "low stock" if < 10 and "in stock" otherwise
    // Use getter
    get availability() {
        switch (true) {
            case (this.numCopies === 0):
                return "out of stock";
            case (this.numCopies < 10):
                return "low stock";
            default:
                return "in stock";
        }
    }

    // Sell book
    // Take total sold and subtract from numCopies available
    // sell(numSold)
    // If no argument is passed, default to 1
    sell(numSold = 1) {
        // If numSold is more than or equal to available, sell
        // Else just sell what's left
        let totalSold = numSold;

        if (numSold <= this.numCopies) {
            this.numCopies -= numSold;
        }
        else {
            totalSold = this.numCopies;
            this.numCopies = 0;
        }

        return `sold ${totalSold} copies`;
    }
   
    // Restock book
    // Take total to restock and add to numCopies available
    // restock(numCopies)
    // If no argument is passed, default to 5
    restock(numRestock = 5) { 
        this.numCopies += numRestock;
        
        return `restocked ${numRestock} copies`;
     }
}