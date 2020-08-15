const by = " by ";
const comma = ", "
const p = " pages";
const not = "not ";
const yet = " yet";

let myLibrary = [{ Title: "The Hobbit", Author: "J.R.R. Tolkein", Pages: "295"}];
let div, addBook, content, container, title, author, pages, read, i = 0;

title = document.getElementById("title").value;
author = document.getElementById("author").value;
pages = document.getElementById("pages").value;



function book(){
    this.Title = title,
    this.Author = author,
    this.Pages = pages,
    this.Read = read
}



function addBookToLibrary() {
    i++;
    i+='';
    addBook = new book();
    myLibrary.push(addBook);
    render();
}

function render () {
    div = document.createElement('div');
    container = document.querySelector('#container');
    container.appendChild(div);
    div.setAttribute("class", "card");

    for(let key in myLibrary[i]) {
        content = document.createElement('div');
        div.appendChild(content); 
        content.innerHTML = key + ": " + myLibrary[i][key];
    }
}

const theHobbit = new book("The Hobbit", "J.R.R. Tolkein", "295", "Not Read")

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 




// create a form* that unhides when "Add Book" is pressed and has the follow input options: Title, Author, Pages. 
// And add read/not read toggle to the card. Input values should be stored in direct variables then run the "addbookToLibrary()" function when "Submit" button is pressed.