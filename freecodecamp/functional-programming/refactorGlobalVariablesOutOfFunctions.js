const { listenerCount } = require("process");

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(list, bookName) {
  // one line return
  // return [...list, bookName]

  let updatedBooks = [...list]

  updatedBooks.push(bookName);
  return updatedBooks;
  
  // Change code above this line
}

// Change code below this line
function remove(list, bookName) {
  // one line return
  // return list.filter(book => book !== bookName);
  
  let updatedBooks = [...list];

  const book_index = updatedBooks.indexOf(bookName);
  if (book_index >= 0) {

    updatedBooks.splice(book_index, 1);
    return updatedBooks;

    // Change code above this line
    }
}