// Create a movie object that takes in these arguments: title, director, genre, release year, rating
class Movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    // Object should have a getOverview function which logs an overview for each film shaped like so:
    // `${movie}, a ${genre} film directed by ${director}, was released in ${releaseYear}. It received a rating of ${rating}.`
    get overview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director}, was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
    }
}