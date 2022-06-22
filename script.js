
let myLibrary = [];
const container = document.getElementsByClassName('container');
const button = document.querySelector('button');
const form = document.querySelector('form');


class Book {
  constructor(name,author,pages,read)
  {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}


function addBookToLibrary(book) {
  myLibrary.push(book);
}

// Add some books
const hobbit = new Book('The Hobbit', 'Tolkien',332,false);
const warAndPeace = new Book('War and Peace', 'Someone',1028,true);
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
    newCard.innerHTML += "<p> Read <label class='switch'><input type='checkbox' id='readCheckbox'> <span class='slider round'></span> </label></p>";

    if(e.read){
      newCard.querySelector('#readCheckbox').checked = true;
    }
    
    newCard.classList.add('card');
    document.querySelector('.container').appendChild(newCard);

});
}


document.querySelector('.showAddForm').addEventListener("click", addButtonClicked);

function addButtonClicked() {
  document.querySelector(".book-form").style.display = "flex";
  document.querySelector(".container").style.gridTemplateRows = "150px 225px repeat(auto-fit,minmax(200px,1fr))";
}

const formSubmitButton = document.querySelector('.bookAdd');


formSubmitButton.addEventListener("click", (e) => {
  let title = document.querySelector("#book_title").value;
  let author = document.querySelector("#book_author").value;
  let pages = document.querySelector("#book_num_pages").value;
  let read = document.querySelector("#book_read").value == 'y' ? true : false;


  newBook = new Book(title,author,pages,read);
  console.log(newBook);
  addBookToLibrary(newBook);
  render();
  clearForm();
  
  

})

const closeFormButton = document.querySelector('.closeFormButton');

closeFormButton.addEventListener('click', () => {clearForm()});

function clearForm() {
  form.reset();
  //Hide form from view
  document.querySelector(".book-form").style.display = "none";
  document.querySelector(".container").style.gridTemplateRows = "150px 50px repeat(auto-fit,minmax(200px,1fr))";

}

render();