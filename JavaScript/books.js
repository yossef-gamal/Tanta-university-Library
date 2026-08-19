let books = document.querySelectorAll(".book_card");

let params = new URLSearchParams(window.location.search);
let search = params.get("search");

for(let i=0; i<books.length; i++){
    let bookname = books[i].querySelector("h3").textContent;

    if (bookname.toLowerCase().includes(search.toLowerCase())){
        books[i].style.display = "inline-block";
    }
    else{
        books[i].style.display = "none"
    }
}

