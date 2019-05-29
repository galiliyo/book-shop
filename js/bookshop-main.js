'use strict'

function addEventListeners() {
  $('.btn-delete').click(onDeletebook)

  $('.btn-edit').click(onEditBook)
}

function onInit() {
  createBooks()
  renderBooks()
  addEventListeners()
  renderPagination()
}

function renderBooks() {
  var books = getBooks()
  var strHtmls = '<div class="row "> \n'
  var mappedBooks = books.map(function(book) {
    return `
        <div class='col-sm-6 col-md-4 col-lg-3'>
            <div class="card" style="width: 14rem;">
                <img class="card-img-top" src="${
                  book.imgUrl
                }" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title book-title"><a>${book.title}</a></h5>
                    <h6 class="card-title author-title"><span>by </span>${
                      book.author
                    }</h6>
                    <div class='card-controls'>
                        <div><h6>$ ${book.price}</h6></div>
                        <div>
                            <a href="#" class="btn-edit btn-tertiary" data-toggle="modal" data-target="#editBookModal" data-id="${
                              book.id
                            }">
                            <i class="far fa-edit"></i></a>
                            <a href="#" class="btn-delete btn-tertiary" data-id="${
                              book.id
                            }"><i class="far fa-trash-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
  })
  strHtmls += mappedBooks.join('') + '</div>'

  $('.cards').html(strHtmls)
}

function onReadbook(bookId) {
  readbook(bookId)
}

function onCloseModal() {
  $('.modal').hide()
}

function onSaveEditedBook(el) {
  console.log(el)
}

function onDeletebook(e) {
  let bookId = $(this).data().id
  deletebook(bookId)
  renderBooks()
  addEventListeners()
}

function onEditBook() {
  let bookId = $(this).data().id
  let currBook = getbookById(bookId)
  console.log(currBook)
  $('.modal #book-title').val(currBook.title)
  $('.modal #book-author').val(currBook.author)
  $('.modal #book-price').val(currBook.price)
  $('.modal #book-overview').val(currBook.overview)
}

function onAddBook() {
  var title = prompt('Enter book Title')
  var author = prompt('Enter book Author')
  var price = prompt('Enter book Price')
  var overview = prompt('Enter book Overview')
  addbook(title, author, price, overview)
  renderBooks()
  addEventListeners()
}
// Todo
function onUpdatebook(bookId) {
  var newSpeed = +prompt('Speed?')
  updatebook(bookId, newSpeed)
  renderBooks()
}

function onNextPage() {
  nextPage()
  renderBooks()
}

function readbook(bookId) {
  var book = getbookById(bookId)
  var $modal = $('.modal')
  $modal.find('h5').text(book.vendor)
  $modal.find('p').text(book.overview)
  $modal.show()
}

function renderPagination() {
  let currPageIdx = getCurrPageIdx()
  let allBooks = getAllBooks()
  let numberOfPages = Math.ceil(allBooks.length / PAGE_SIZE)
  let strHtmls = `<li class="page-item">
    <a class="page-link" data-page="prev" href="#" aria-label="Previous" onclick="onChangePage($(this).data('page'))">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
    </a>
    </li> \n`
  for (let i = 0; i < numberOfPages; i++) {
      let strClass = (i===currPageIdx) ? 'active' : ''
    strHtmls +=
    `<li class="page-item ${strClass}">
        <a class="page-link" data-page="${i}" onclick="onChangePage($(this).data('page'))">${i+1}</a>
     </li>`
  }

  strHtmls += `<li class="page-item">
  <a class="page-link" data-page="next" aria-label="Next" onclick="onChangePage($(this).data('page'))">
    <span aria-hidden="true">&raquo;</span>
    <span class="sr-only">Next</span>
  </a>
</li>`

  $('ul.pagination').html(strHtmls)
}

function onChangePage(destinationPageIdx) {
  let allBooks = getAllBooks()
  let numberOfPages = Math.ceil(allBooks.length / PAGE_SIZE)
  let curPageIdx = getCurrPageIdx()
  if (destinationPageIdx === 'next') destinationPageIdx = curPageIdx + 1
  else if (destinationPageIdx === 'prev') destinationPageIdx = curPageIdx - 1

  if (destinationPageIdx > numberOfPages || destinationPageIdx < 0) {
    destinationPageIdx = curPageIdx
  }

  setCurrPageIdx(destinationPageIdx)

  renderBooks()
  renderPagination()
}
