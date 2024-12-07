// Object Literal
const book1 = {
    title: 'Book Ome',
    author: 'John Doe',
    year: '2020',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};

console.log(book1);

const book2 = {
    title: 'Adam',
    author: 'John Doe',
    year: '2023',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};
console.log(book1, book2);