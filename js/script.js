let myLib = [];

function Book(name, pages){
    this.name = name;
    this.pages = pages;
}

function addBooktoLibrary(name, pages){
    if(name == "") return;
    if(pages == ""){
        pages = 0;
    }
    let newBook = new Book(name, pages);
    myLib.push(newBook);
}

function refreshScreen(){
    removeChild(library);
    myLib.forEach(function(book, i) {
        const newDiv = document.createElement("div");
        const newCover = document.createElement("div");
        const newInfo = document.createElement("div");
        const nameInfo = document.createElement("p");
        const pageInfo = document.createElement("p");
        const nameText = document.createElement("span");
        const pageText = document.createElement("span");
        const dataName = document.createElement("span");
        const dataPages = document.createElement("span");
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        newDiv.classList.add("card");
        newCover.classList.add("cover");
        nameText.classList.add("static");
        pageText.classList.add("static");
        nameInfo.classList.add("bookInfo");
        pageInfo.classList.add("bookInfo");
        nameInfo.appendChild(nameText);
        nameInfo.appendChild(dataName);
        pageInfo.appendChild(pageText);
        pageInfo.appendChild(dataPages);
        newInfo.appendChild(nameInfo);
        newInfo.appendChild(pageInfo);
        newDiv.appendChild(newCover);
        newDiv.appendChild(newInfo);
        newDiv.appendChild(deleteButton);
        library.appendChild(newDiv);
        
        deleteButton.innerText = "Delete";
        deleteButton.dataset.index = i;

        dataName.innerText = book.name;
        dataPages.innerText = book.pages;

        nameText.innerText = "Title: ";
        pageText.innerText = "Pages: ";
    });
}

function removeChild(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


// Selectors //
const submitButton = document.getElementById("submitButton");
const library = document.getElementById("libraryMain");

submitButton.addEventListener("click", function(){
    const bookName = document.getElementById("bookName").value;
    const bookPages = document.getElementById("bookPages").value;
    addBooktoLibrary(bookName,bookPages);
    refreshScreen();
    console.log(myLib);
})

document.body.addEventListener("click", function(event){
    if(event.target.classList == "deleteButton"){
        const indexToRemove = event.target.dataset.index;
        myLib.splice(indexToRemove,1);
        refreshScreen();
    }
})