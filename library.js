const myLibrary = [];

const booksContainer = document.querySelector("#booksContainer");

function Book(title, author, pageNumbers, isRead) {
  this.title = title;
  this.author = author;
  this.pageNumbers = pageNumbers;
  this.isRead = isRead;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pageNumbers} pages, ${
      isRead ? "is read" : "not read yet"
    }`;
  };
}
function addBookToLibrary(object) {
  myLibrary.push(object);
}
const theHobbit = new Book("The Hobbit", "J.R.R Toliken", 295, true);
addBookToLibrary(theHobbit);
myLibrary;
if (myLibrary.length === 0) {
  booksContainer.innerHTML = `<p>For the moment your library is empty.</p>
      <p>Your can add a new book using the button below</p>`;
}

z = theHobbit.info();
z;
