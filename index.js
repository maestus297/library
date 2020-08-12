const by = " by ";
const comma = ", "
const p = " pages";
const not = "not ";
const yet = " yet";

let myLibrary = [];
let i = 0;

function book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        if(read.toLowerCase() == "not read") {
            return title + by + author + comma + pages + p + comma + read.toLowerCase() + yet;
        }
    }
}

const theHobbit = new book("The Hobbit", "J.R.R. Tolkein", "295", "Not Read")

function addBookToLibrary() {
    prompt();
    i++;
    i+='';
    i = new book();
    myLibrary.push(i);
  }

function render () {
}


// create a prompt that pops up a window with the follow input options: Title, Author, Pages. 
// And add read/not read toggle to the card. Input values should be stored in direct variables then run the constructor