const by = "by";
const comma = ", "
const p = "pages";
const not = "not";
const yet = "yet";


function Books(title, author, pages, read){
    book.title = title;
    book.author = author;
    book.pages = pages;
    book.read = read;
    book.info = function() {
        return title + by + author + comma + pages + p + comma + not + read + yet;
    }
}