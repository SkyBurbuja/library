let myLibrary = [];

function book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = (read) => {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook);
}

function createNewBook(){
    let newTitle = prompt('What is the title of the book');
    if(newTitle == null){
        return;
    }
    let newAuthor = prompt('Who is the author?');
    if(newAuthor==null){
        return;
    }
    let pages = prompt('How many pages?');
    if(pages==null){
        return;
    }
    let read = prompt('Have you read it?');
    if(read ==null){
        return;
    }
    let newBook = new book(newTitle,newAuthor,pages,read);
    addBookToLibrary(newBook);
    displayBooks()
}

//Dummy books to gauge display
//const theHobbit = new book('The Hobbit','J.R.R Tolkien',295,'not read');
//const harryPotterPS = new book('Harry Potter and the Philosphers Stone','J.K Rowling',250,'read');

//addBookToLibrary(theHobbit);
//addBookToLibrary(harryPotterPS);

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
        newBookCard.textContent = myLibrary[i].info(myLibrary[i].read);
        createBookRemovalButton(newBookCard,i);
        createReadButton(newBookCard,i);
        bookContainer.appendChild(newBookCard);
    }

    const readToggle = document.querySelectorAll('.read');
    readToggle.forEach(button => button.addEventListener('click',toggleRead));
    
    const removal = document.querySelectorAll('.remove');
    removal.forEach(button => button.addEventListener('click',remove));
}

function createBookRemovalButton(bookCard,i){
    const newButton = document.createElement('button');
    newButton.textContent = 'Remove';
    newButton.setAttribute('class','remove');
    newButton.setAttribute('id',`${i}`);
    bookCard.appendChild(newButton);
    
}

function createReadButton(bookCard,i){
    const newButton = document.createElement('button');
    newButton.textContent = 'Toggle Read';
    newButton.setAttribute('class','read');
    newButton.setAttribute('id',`${i}`);
    bookCard.appendChild(newButton);
    
}


function remove(e){
    let dataIndex = parseInt(e.target.id)
    for(i=0;i<myLibrary.length;i++){
        if(dataIndex == i){
            myLibrary.splice(i,1);
        }
    }
    displayBooks();
}

function toggleRead(e){
    let dataIndex = parseInt(e.target.id);

    if(myLibrary[dataIndex].read=='read'){
        myLibrary[dataIndex].read = 'not read';
    }else if(myLibrary[dataIndex].read =='not read'){
        myLibrary[dataIndex].read = 'read';
    }
    
    displayBooks();
}
const createNewBookBtn = document.querySelector('#addBook');
createNewBookBtn.addEventListener('click',createNewBook);

displayBooks();