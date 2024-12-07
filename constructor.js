//Constructor 
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    };
}
// Instatiate an Onject
const book1 = new Book('Book One', 'John doe', '2023');
const book2 = new Book('Book One', 'Bulilit', '2022');

console.log(book2.getSummary());