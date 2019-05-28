'use strict'

var gBooks;
const PAGE_SIZE = 10
var currPageIdx = 0


function getBooks() {
    var fromIdx = currPageIdx * PAGE_SIZE
    var books = gBooks.slice(fromIdx, fromIdx + PAGE_SIZE)
    return books
}


function createBooks() {
    var books = [
        createbook('Don Quixote', 'Miguel de Cervantes', '15.99'),
        createbook('Moby Dick', 'Herman Melville', '15.99'),
        createbook('The Great Gatsby', 'F. Scott Fitzgerald', '15.99'),
        createbook('Hamlet', ' William Shakespeare', '15.99'),
        createbook('War and Peace', 'Loe Tolstoy', '15.99')
    ]
    gBooks = books;
}

function createbook(title, author, price, overview, imgUrl = '../book-shop/img/default-book.png') {
    return {
        id: makeId(),
        title,
        author,
        price,
        overview: 'The next I heard of Frank was that he was in Montana, and then he went prospecting in Arizona, and then I heard of him from New Mexico. After that came a long newspaper',
        imgUrl,
    }
}

function deletebook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
}

function addbook(title, author, price, overview, imgUrl) {
    var book = createbook(title, author, price, overview, imgUrl)
    gBooks.push(book)
}

function getbookById(bookId) {
    var book = gBooks.find(function (book) {
        return bookId === book.id
    })
    return book
}



function updatebook(bookId, title, author, imgUrl) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookId;
        
    })
    // gBooks[bookIdx].  = newSpeed;
}

function nextPage() {
    currPageIdx++
}