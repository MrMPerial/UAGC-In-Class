const mongodb = require('./mongodb.utils');
const Author = require('./author.model');
const Book = require('./book.model');

module.exports = {
  fetchAllAuthors,
  searchByFirstname,
  searchByLastname,
  searchByBook,
  addNewAuthor,
  addNewBook,
  updateAuthor,
  updateBook
}

function fetchAllAuthors() {
  return Author.find({}).populate('books').exec();
}

function searchByFirstname(nameToFind) {
  return Author.find({ firstname: nameToFind }).populate('author').exec();
}

function searchByLastname(nameToFind) {
  return Author.find({ lastname: nameToFind }).populate('author').exec();
}

function searchByBook(bookToFind) {
  return Book.find({ title: bookToFind }).populate('books').exec();
}

function addNewAuthor(first, last) {
  const newAuthor = new Author({
    firstname: first,
    lastname: last
  });
  return newAuthor.save();
}

function addNewBook(bookToSave) {
  let authorInfo;
  let bookInfo;
  return Author.find({ firstname: bookToSave.author.firstname, lastname: bookToSave.author.lastname }).exec()
  .then((authorSearchResult) => {
    if (authorSearchResult && authorSearchResult.length > 0) {
      return authorSearchResult[0];
    } else {
      let author = new Author({
        firstname: bookToSave.author.firstname,
        lastname: bookToSave.author.lastname
      });
      return author.save();
    }
  })
  .then((authorSaved) => {
    authorInfo = authorSaved;
    let book = new Book({
      title: bookToSave.title,
      author: authorInfo._id
    });
    return book.save();
  })
  .then((bookSaved) => {
    let bookInfo = bookSaved;
    authorInfo.books.push(bookInfo._id);
    return authorInfo.save();
  })
  .then((updatedAuthorInfo) => {
    let infoToReturn = {
      author: authorInfo,
      book: bookInfo
    };
    return infoToReturn;
  });
}

function updateAuthor(authorToUpdate) {
  console.log(authorToUpdate);
  console.log();
  return Author.findById(authorToUpdate.id)
  .then((authorFetched) => {
    let changes = {};
    authorFetched.firstname = authorToUpdate.firstname;
    authorFetched.lastname = authorToUpdate.lastname;
    return authorFetched.save();
  });
}

function updateBook(bookToUpdate) {
  return Book.findById(bookToUpdate.id)
  .then((bookFetched) => {
    bookFetched.title = bookToUpdate.title;
    return bookFetched.save();
  });
}
