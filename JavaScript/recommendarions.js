let bookname = document.querySelector(".book_name");
let studentname = document.querySelector(".student_name");
let collegename = document.querySelector(".college_name");
let recommendationText = document.querySelector(".recommendation_text");

let addbutton = document.querySelector(".add_btn");

let recommendationscontainer = document.querySelector(".recommendations_container");


addbutton.addEventListener("click", function() {

    if(bookname.value=="" || studentname.value==""||
        collegename.value==""|| recommendationText.value==""
    ){
        alert("Please fill all fields");
        return;
    }
    let card = document.createElement("div");

    card.className ="recommendation_card";

    card.innerHTML =
    "<h3>" + bookname.value +"</h3>"+
    "<p>Recommended by: " + studentname.value + "</p>"+
    "<p>College: " + collegename.value + "</p>"+
    "<p>" + recommendationText.value + "</p>";

    recommendationscontainer.appendChild(card);

    bookname.value ="";
    studentname.value = "";
    collegename.value="";
    recommendationText.value="";
});

