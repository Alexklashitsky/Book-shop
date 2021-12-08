'use strict'
var gCurrBook

function onInit() {
    renderBooks()
    renderPagination()
}

function renderBooks() {
    const books = getBooks()
    const elBooks = document.querySelector('.books-table')
    const strHtml = books.map((currBook) => {
        return `<tr class="table-success" >
        <td class="table-success" > ${currBook.id}</td>
      <td class="table-success">${currBook.title}</td>
      <td class="table-success">${currBook.price}</td>
      <td class="table-success">
      <button data-trans="read" class="read"   onclick="onOpenModal('${currBook.id}')" >Read</button>
      <button data-trans="update" class="update" onclick="onUpdateBook('${currBook.id}')">Update</button>
      <button data-trans="delete" class="delete" onclick="onRemoveBook('${currBook.id}')">Delete</button>
     </td>
    
  </tr>`   })
    elBooks.innerHTML = strHtml.join('')
}

function onRemoveBook(bookId) {
    // console.log('hi');
    console.log('bookId:', bookId);
    removeBook(bookId)
    renderBooks()

}
function onAddBook() {
    const name = prompt('Pls type the name of the book')
    const price = +prompt('what is the price?')
    addBook(name, price)
    renderBooks()
}
function onUpdateBook(bookId) {
    const price = +prompt('What is the price')
    updateBook(bookId, price)
    renderBooks()
}
function onCloseModal() {
    document.querySelector('.modal1').classList.remove('open')
}
function onOpenModal(bookId) {
    console.log('hi');
    var book = gBooks[getBookById(bookId)]

    gCurrBook = book
    document.querySelector('.modal1').classList.add('open')

    var elTitle = document.querySelector('.modal1 h3')
    elTitle.innerText = book.title
    var elPrice = document.querySelector('.modal1 span')
    elPrice.innerText = book.price
    var elDesc = document.querySelector('.modal1 p')
    elDesc.innerText = book.desc
    var elRate = document.querySelector('.modal1 small')
    elRate.innerText = book.rate
}

function renderPagination() {
    const numPage = getNumPages()
    var strHtml = ''
    for (var i = 0; i < numPage; i++) {
        strHtml += `<a href="#" onclick="onPage(this, ${i})" >${i + 1}</a>`;
    }
    document.querySelector('.pagination').innerHTML = strHtml;
    document.querySelector(`.pagination a:nth-child(1)`).classList.add('active');


}

function onPage(elPage, numPage) {
    _removeActiveClass();
    goToPage(numPage);
    elPage.classList.add('active');
    renderBooks();
}

function _removeActiveClass() {
    const elPages = document.querySelectorAll('.pagination a');
    elPages.forEach((element) => {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
    });
}


function onUpRate() {
    upRate()
    console.log('gCurrBook:', gCurrBook);

    document.querySelector('.modal small').innerText = gCurrBook.rate



}

function onDownRate() {
    downRate()
    var elRate = document.querySelector('.modal small')
    elRate.innerText = gCurrBook.rate
}

function onSetLang(lang) {
    setLang(lang);
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')

    renderBooks()
    doTrans()


}

function onSetSortBy(sortBy) {
    setBookSort(sortBy);
    renderBooks();
}
