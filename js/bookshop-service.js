'use strict'

var gBooks
const PAGE_SIZE = 6
var currPageIdx = 0

function getBooks() {
  var fromIdx = currPageIdx * PAGE_SIZE
  var books = gBooks.slice(fromIdx, fromIdx + PAGE_SIZE)
  return books
}

function getAllBooks() {
  return gBooks
}

function createBooks() {
  var books = [
    createbook('Don Quixote', 'Miguel de Cervantes', '15.99', 4),
    createbook('Moby Dick', 'Herman Melville', '15.99', 4),
    createbook('The Great Gatsby', 'F. Scott Fitzgerald', '15.99', 4),
    createbook('Hamlet', ' William Shakespeare', '15.99', 4),
    createbook('War and Peace', 'Loe Tolstoy', '15.99', 4),
    createbook('In Search of Lost Time', 'Marcel Proust', '15.99', 4),
    createbook('Moby Dick', 'Herman Melville', '15.99', 4),
    createbook('The Odyssey', 'Homer', '15.99', 4),
    createbook('Hamlet', 'William Shakespeare', '15.99', 4),
    createbook(
      'One Hundred Years of Solitude',
      'Gabriel Garcia Marquez',
      '15.99',
      4
    ),
    createbook('The Divine Comedy', ' Dante Alighieri', '15.99', 4),
    createbook('The Brothers Karamazov ', ' Fyodor Dostoyevsky', '15.99', 4),
    createbook('Madame Bovary', 'Gustave Flaubert', '15.99', 4),
    createbook('The Adventures of Huckleberry Finn', 'Mark Twain', '15.99', 4),
    createbook('Lolita', 'Vladimir Nabokov', '15.99', 4)
  ]
  gBooks = books
}

function createbook(
  title,
  author,
  price,
  overview,
  imgUrl = './img/default-book.png'
) {
  return {
    id: makeId(),
    title,
    author,
    price,
    overview:
      'The next I heard of Frank was that he was in Montana, and then he went prospecting in Arizona, and then I heard of him from New Mexico. After that came a long newspaper',
    imgUrl
  }
}

function deletebook(bookId) {
  var bookIdx = gBooks.findIndex(function(book) {
    return bookId === book.id
  })
  gBooks.splice(bookIdx, 1)
}

function addbook(title, author, price, overview, imgUrl) {
  var book = createbook(title, author, price, overview, imgUrl)
  gBooks.push(book)
}

function getbookById(bookId) {
  var book = gBooks.find(function(book) {
    return bookId === book.id
  })
  return book
}

function updatebook(bookId, title, author, price, overview, imgUrl) {
  var book = getbookById(bookId)

  book.title = title
  book.author = author
  book.price = price
  book.overview = overview
}

function nextPage() {
  currPageIdx++
}

function setCurrPageIdx(destinationPageIdx) {
  currPageIdx = destinationPageIdx
}

function getCurrPageIdx() {
  return currPageIdx
}
