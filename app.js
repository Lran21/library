const newBookBtn = document.querySelector('#newBook');
const submitBtn = document.querySelector('#submitBook');
const bookForm = document.querySelector('#bookForm');


// const authorInput = document.getElementById('#authorName');
// const pagesInput = document.getElementById('#pageNum');
// const readInput = document.getElementById('#readTrue');


let myLibrary = [];



function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    const bookTitle = document.querySelector('input[name="title"]').value;
    const authorName = document.querySelector('input[name="authorName"]').value;
    const numPages = document.querySelector('input[name="pageNum"]').value;
    const read = document.querySelector('input[id="accept"]').value;

    myLibrary.push(new Book(bookTitle, authorName, numPages, read));
    

    const container = document.querySelector('#booksOutput');
    const createCard = document.createElement('div');
    createCard.className = "cardDiv";
    const divTitle = document.createElement('p');
    const divAuthor = document.createElement('p');
    const divPages = document.createElement('p');
    const divRead = document.createElement('p');
    const readBtn = document.createElement('button');
    ;
    

    divTitle.textContent = "Title: " + bookTitle;
    divAuthor.textContent = "Author: " + authorName;
    divPages.textContent = "Pages: " + numPages;

    //check if read is checked or not and create button
    let hasRead = document.getElementById('accept').checked;
    if(hasRead === true){
        readBtn.textContent = "Read";
        readBtn.style.backgroundColor = '#5cdb5c';
    }
    else{
        readBtn.textContent = "Not Read"
        readBtn.style.backgroundColor = '#ff0021';
    }

    // divRead.textContent = hasRead + readBtn;

    

    const deleteBtn = document.createElement('button');

    
    
    

    container.appendChild(createCard);
    createCard.appendChild(divTitle);
    createCard.appendChild(divAuthor);
    createCard.appendChild(divPages);
    createCard.appendChild(divRead);
    createCard.appendChild(readBtn);
    createCard.appendChild(deleteBtn);
    deleteBtn.textContent = "Delete";


    deleteBtn.addEventListener('click', e =>{
        e.target.parentNode.remove();
        myLibrary = myLibrary.filter(v => v[1] !== e.target);
    })

    readBtn.addEventListener('click', e =>{
        if(hasRead === true){
            readBtn.textContent = "Not Read"
            readBtn.style.backgroundColor = '#ff0021';
            hasRead = false;
        }
        else if(hasRead === false){
            readBtn.textContent = "Read";
            readBtn.style.backgroundColor = '#5cdb5c';
            hasRead = true;
        }
    })

}

//opens form to input new books
newBookBtn.addEventListener('click', function(){
    bookForm.style.display = 'flex';
})

// addBookToLibrary();
submitBtn.addEventListener('click', function(){
    //keeps submit button from refreshing page
    event.preventDefault();
    addBookToLibrary();
    bookForm.style.display = 'none';
});


