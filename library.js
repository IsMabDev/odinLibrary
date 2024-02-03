const myLibrary = [];
isEmpty = true;
currentIndex = 0;

const booksContainer = document.querySelector("#booksContainer");

function Book(title, author, pageNumbers, isRead) {
  this.index = currentIndex;
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
  currentIndex++;
}
const theHobbit = new Book("The Hobbit", "J.R.R Toliken", 295, true);
addBookToLibrary(theHobbit);

const addBookButton = document.querySelector("#addBook");

const addBookDialog = document.querySelector("#bookDialog");

const cancelDialog = document.querySelector("#cancelDialog");

const saveDialog = document.querySelector("#saveDialog");

const titleNewBook = document.querySelector("#title");
const authorNewBook = document.querySelector("#dialogAuthor");
const pagesNewBook = document.querySelector("#pages");
const isReadNewBook = document.querySelector("#read");
updateLibrary();

const addForm = document.querySelector("#bookDialog>form");

addBookButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

cancelDialog.addEventListener("click", () => {
  addBookDialog.close();
});

saveDialog.addEventListener("click", (e) => {
  e.preventDefault();
  if (addForm.checkValidity()) {
    const newBook = new Book(
      titleNewBook.value,
      authorNewBook.value,
      pagesNewBook.value,
      isReadNewBook.value === "yes" ? true : false
    );
    addBookToLibrary(newBook);
    myLibrary;
    console.log("myLibrary: ", myLibrary);
    updateLibrary();
    addForm.reset();
    addBookDialog.close();
  } else {
    alert("please fill all the required fields");
  }
});

function updateLibrary() {
  if (myLibrary.length === 0 && isEmpty) {
    booksContainer.innerHTML = `<div id="emptyLibrary"><p>For the moment your library is empty.</p>
      <p>Your can add a new book using the button above</p></div>`;
  } else {
    if (isEmpty) {
      booksContainer.innerHTML = "";
    }

    booksContainer.innerHTML += `<div class="bookCard">
        <h1 class="bookTitle">Title: ${
          myLibrary[myLibrary.length - 1].title
        }</h1>
        <h4 class="bookAuthor">Author:  ${
          myLibrary[myLibrary.length - 1].author
        }</h4>
        <h4 class="bookPagesNumber">Pages Number: ${
          myLibrary[myLibrary.length - 1].pageNumbers
        }</h4>
        <div class="cardButtons">
        <button class="isRead" title="isRead" value="true">${
          myLibrary[myLibrary.length - 1].isRead ? "is read" : "not yet read"
        }</button>

        <button class="deleteBook"></button>
        
        </div>
        <div class="index">${myLibrary[myLibrary.length - 1].index}</div>
      </div>`;
    const deleteButtons = document.querySelectorAll(".deleteBook");
    console.log("deleteButtons: ", deleteButtons);
    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        container = button.parentElement.parentElement;
        const indexOfElement = container.querySelector(".index");

        myLibrary.splice(
          myLibrary.findIndex((obj) => {
            console.log("indexOfElement text: ", indexOfElement.textContent);
            console.log("obj.index: ", obj.index);

            return obj.index == indexOfElement.textContent;
          }),
          1
        );

        console.log("myLibrary after delete: ", myLibrary);

        container.remove();

        if (myLibrary.length === 0) {
          isEmpty = true;
          updateLibrary();
        } else {
          isEmpty = false;
        }
      });
    });
    isEmpty = false;
  }
}
