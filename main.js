console.log("My Favorite Korean Movie Collection!");

var Airtable = require("airtable");
console.log(Airtable); 




const base = require('airtable').base('appFM7dyonhVM0A5U');

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyAPSgVKXfGcLldOY'
});
var base = Airtable.base('appFM7dyonhVM0A5U');


base("books").select({}).eachPage(gotPageOfBooks, gotAllBooks);

//an empty array to hold our book data
const books = [];

//callback function that receives our data
function gotPageOfBooks(records, fetchNextPage) {
    console.log("gotPageOfBooks()");
    // add the records from this page to our books array
    books.push(...records);
    // request more pages
    fetchNextPage();
}

// call back function that is called when all pages a 
function gotAllBooks(err) {
    console.log("gotAllBooks()");

// report an error, tou'd want to do something better
if (err) {
    console.log("error loading books");
    console.error(err);
    return;
}

// call functions to log and show the books 
consoleLogBooks();
showBooks();
}


// just loop throught the books and console.
function consoleLogBooks() {
    console.log("consoleLogBooks()");
    books.forEach((book) => {
        console.log("Book:", book);
    });
}

function showBooks() {
    console.log("showBooks()");
    books.forEach((book) => {
        const h2 = document.createElement("h2");
        h2.innerText = book.fields.title;
        document.body.appendChild(h2);
    });
}