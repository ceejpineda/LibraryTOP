let myLib = [];

function Book(name, pages){
    this.name = name;
    this.pages = pages;
}

function addBooktoLibrary(name, pages){
    let newBook = new Book(name, pages);
    myLib.push(newBook);
}

// Selectors //



const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(){
    const bookName = document.getElementById("bookName").value;
    const bookPages = document.getElementById("bookPages").value;
    addBooktoLibrary(bookName,bookPages);
    console.log(myLib);
})