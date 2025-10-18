// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  // TODO: Add the quote object to the quotes array
  quotes.push(quote)
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  // TODO: Remove the quote object from the array using the given id
  quotes.splice(quotes.findIndex((x)=>x.id === id),1)
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  quotes.splice(quotes.findIndex((x)=>x.id === id),1,updatedQuote)
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  // TODO: Return the quotes array
  return quotes.forEach(x=>{console.log(x);})
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()

addQuote({id : 1 , name : "A"})
addQuote({id : 2 , name : "B"})
addQuote({id : 3 , name : "C"})

console.log(quotes);

// TODO: Delete 1 quote using deleteQuote()

deleteQuote(3)

console.log(quotes);

// TODO: Update 1 quote using updateQuote()

updateQuote(2,{id:4,name:"x"})

console.log(quotes);


// TODO: Print all quotes using getAllQuotes()

getAllQuotes()
