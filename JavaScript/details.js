let books = [
    {
        title: "Basic Neuroanatomy",
        college: "Medicine",
        author: "Carlton George Smith",
        category: "Anatomy",
        image: "img/anatomy book.jpg",
        description: "This book serves as a guide for medical students and for other health care professionals studying basic neuroanatomy."
    },
    {
        title: "Fundamentals of Managerial Accounting",
        college: "Commerce",
        author: "Dr.Gouda A.Zaghloul",
        category: "Managerial Accounting",
        image: "img/fundamenals of Managerial Accouting.jpeg",
        description: "A clear and concise approach for students to learn the basics of key managerial accounting concepts."
    },
    {
        title: "Machine Drawing",
        college: "Engineering",
        author: "Narayana k.L",
        category: "Machine Drawing",
        image: "img/Machine Drawing.jpg",
        description: "This book provides a detailed study of technical drawing and machine design to acquaint students with the design, drafting and manufacture."
    },
    {
        title: "Data structures",
        college: "Computer science",
        author: "S.K Srivastava",
        category: "Data Structures&algorithms",
        image: "img/data structures.jpg",
        description: "This book focuses on data structures and algorithms for manipulating them. Data structures for storing information in tables, lists, trees, queues and stacks."
    },
    {
        title: "Essentials OF Pharmacology",
        college: "Pharmacy",
        author: "Basu D.K",
        category: "pharmacology",
        image: "img/essentials of pharmacology.jpg",
        description: "This new edition has been fully revised to bring pharmacologists and trainees fully up to date with the latest developments in the field of medical."
    },
    {
        title: "principles of egyption criminal law",
        college: "Law",
        author: "Dr. Ahmed awad belal",
        category: "criminal law",
        image: "img/principles of egyption criminal law.jpg",
        description: "This book provides detailed understanding of criminal sanction and its legal framework."
    }
];

let params = new URLSearchParams(window.location.search);
let book = params.get("book");

let booktitle = document.querySelector(".book_title");
let bookcollege = document.querySelector(".book_college");
let bookauthor = document.querySelector(".book_author");
let bookcategory = document.querySelector(".book_category");
let bookdescription = document.querySelector(".book_description");
let bookimage = document.querySelector(".details_img")


for (let i=0; i < books.length; i++){
    if (books[i].title == book) {

        booktitle.textContent = books[i].title;
        bookcollege.textContent = "College: " + books[i].college;
        bookauthor.textContent = "Author: " + books[i].author;
        bookcategory.textContent = "Category: " + books[i].category;
        bookdescription.textContent = books[i].description;
        bookimage.src = books[i].image;
    }
}