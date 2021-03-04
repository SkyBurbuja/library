let myLibrary = [];

function book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook);
}

function createNewBook(){
    let newTitle = prompt('What is the title of the book');
    let newAuthor = prompt('Who is the author?');
    let pages = prompt('How many pages?');
    let read = prompt('Have you read it?');
    let newBook = new book(newTitle,newAuthor,pages,read);
    addBookToLibrary(newBook);
    displayBooks()
}

//Dummy books to gauge display
const theHobbit = new book('The Hobbit','J.R.R Tolkien',295,'not read yet');
const harryPotterPS = new book('Harry Potter and the Philosphers Stone','J.K Rowling',250,'read');

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotterPS);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function displayBooks(){
    const bookContainer = document.querySelector('#bookContainer');
    removeAllChildNodes(bookContainer);


    for(let i = 0; i<myLibrary.length;i++){
        let newBookCard = document.createElement('div');
        newBookCard.setAttribute('id',`book${i}`);
        newBookCard.setAttribute('class','bookCard');
        newBookCard.textContent = myLibrary[i].info();
        createBookRemovalButton(newBookCard);
        bookContainer.appendChild(newBookCard);
    }
}

function createBookRemovalButton(bookCard){
    const newButton = document.createElement('button');
    newButton.textContent = 'Remove';
    newButton.setAttribute('class','remove');
    bookCard.appendChild(newButton);
}

function remove(e){
    
}

const createNewBookBtn = document.querySelector('#addBook');
createNewBookBtn.addEventListener('click',createNewBook);

const removal = document.querySelectorAll('.remove');
removal.forEach(button => button.addEventListener('click',remove));
displayBooks();