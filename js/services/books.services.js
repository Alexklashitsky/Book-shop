'use strict'
const STORAGE_KEY = 'bookDB';
const PAGE_SIZE = 5;

const gTitles = ['Agent Without Sin',
    'Tree Of The Land',
    'Humans Of The Land',
    'Friends With Gold',
    'Children And Hunters',
    'Gods And Slaves',
    'Strife Of Hell',
    'Ascension Of Fire',
    'Possessed By A Storm',
    'Preparing For The Ashes',
    'Defender Of The Dead',
    'Friend Of The Moon',
    'Commanders Of Our Culture',
    'Foreigners Of Outer Space',
    'Veterans And Spies',
    'Rebels And Hunters',
    'Destruction From Outer Space',
    'Rise Of Our Future',
    'Glory Of New Earth',
    'Limits Of Moondust',
]
var gBooks;
var gPageIdx = 0;
var gSort = 'title'
_createBooks()


function getBooks() {

    if (gSort === 'id') gBooks.sort((b1, b2) => b1.id.localeCompare(b2.id));
    if (gSort === 'title') gBooks.sort((b1, b2) => b1.title.localeCompare(b2.title));
    if (gSort === 'price') gBooks.sort((b1, b2) => b1.price - b2.price);
    const startIdx = gPageIdx * PAGE_SIZE
    return gBooks.slice(startIdx, startIdx + PAGE_SIZE);

}

function getBookById(bookId) {
    return gBooks.find((book) => book.id === +bookId);
}

function setBookSort(sortBy) {
    gSort = sortBy
}


function getNumPages() {
    var test = Math.ceil(gBooks.length / PAGE_SIZE)
    console.log('test:', test);

    return Math.ceil(gBooks.length / PAGE_SIZE)
}

function goToPage(numPage) {
    gPageIdx = numPage
}

function removeBook(bookId) {
    const bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage();

}

function addBook(name, price) {
    const newBook = _createBook(name, price)
    gBooks.unshift(newBook)
}

function downRate() {
    if (gCurrBook.rate > 0) gCurrBook.rate = gCurrBook.rate - 1


}

function upRate() {
    if (gCurrBook.rate < 9) gCurrBook.rate = gCurrBook.rate + 1

}

function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = []

        for (let i = 0; i < 10; i++) {
            var title = gTitles[getRandomIntInclusive(0, gTitles.length - 1)]
            books.push(_createBook(title))
        }
    }
    gBooks = books;
    _saveBooksToStorage();
}
function updateBook(bookId, price) {

    const bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks[bookIdx].price = price

}


function _createBook(title, price = getRandomIntInclusive(10, 400)) {
    return {
        id: makeId(),
        title,
        price,
        desc: makeLorem(),
        rate: 0



    }
}
function _saveBooksToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}

function getBookById(bookId) {
    const bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    return bookIdx
}