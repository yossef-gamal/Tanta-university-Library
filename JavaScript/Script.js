let searchinput = document.querySelector(".search_input");
let searchbutton= document.querySelector(".search_btn");

searchbutton.addEventListener("click", function() {
    let user_search =searchinput.value;

    if(user_search==""){alert("Please enter a book name"); return;}
    
    window.location.href = "books.html?search=" + user_search;
});

