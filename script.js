
let myLibrary = [];
const container = document.getElementsByClassName('container');
const button = document.querySelector('button');

function Book(name,author,pages,read) {
  this.name = name
  this.author = author
  this.pages = pages
  this.read = read
}


function addBookToLibrary(book) {
  myLibrary.push(book);
}

// Add some books
const hobbit = new Book('The Hobbit', 'Tolkien',332,false);
const warAndPeace = new Book('War and Peace', 'Someone',1028,false);
const greatExpectations = new Book('Great Expectations', 'Charles Dickens',281,true);

myLibrary.push(hobbit);
myLibrary.push(warAndPeace);
myLibrary.push(greatExpectations);

function render() {
  //Clear slate of existing cards from container
  const existingCards = document.querySelectorAll('.card');

  existingCards.forEach(item => {
  item.remove();
  });

  //Add all cards to container div
  myLibrary.forEach(function (e) {
    //console.log(e.name);
    var newCard = document.createElement('div');
    newCard.innerHTML = '<p>' + e.name + '</p>';
    newCard.innerHTML += '<p>' + ' by ' + e.author  + '</p>';
    newCard.innerHTML += '<p>' + e.pages + ' pages' + '</p>';
    
    newCard.classList.add('card');
    document.querySelector('.container').appendChild(newCard);

});
}


document.querySelector('.showAddForm').addEventListener("click", addButtonClicked);

function addButtonClicked() {
  document.querySelector(".book-form").style.display = "flex";
  document.querySelector(".container").style.gridTemplateRows = "150px 200px repeat(auto-fit,minmax(200px,1fr))";
}

const formSubmitButton = document.querySelector('.bookAdd');


formSubmitButton.addEventListener("click", (e) => {
  let title = document.querySelector("#book_title").value;
  let author = document.querySelector("#book_author").value;
  let pages = document.querySelector("#book_num_pages").value;
  let read = document.querySelector("#book_read").value == 'y' ? true : false;


  newBook = new Book(title,author,pages,read);
  console.log(newBook);
  myLibrary.push(newBook);
  render();

})

render();