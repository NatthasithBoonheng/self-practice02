// Lesson 3 - Events Starter

import { addQuote, deleteQuote, updateQuote, getAllQuotes } from "./quote.js"

let quotes = []


// Select DOM elements
const quoteList = document.getElementById("quote-list")
const form = document.getElementById("quoteForm")
const contentInput = document.getElementById("content")
const authorInput = document.getElementById("author")
const idInput = document.getElementById("quoteId")
const randomBtn = document.getElementById("randomBtn")
const randomDisplay = document.getElementById("randomQuoteDisplay")



function createQuoteElement(quote) {
    quoteList.innerHTML = "";
    quote.forEach((arr)=>{
      let Container = document.createElement("section")
      Container.setAttribute("data-id",`${arr.id}`)
      quoteList.append(Container)
      let p1=document.createElement("p")
      p1.textContent = arr.content
      Container.append(p1)
      let p2 = document.createElement("p")
      p2.textContent = arr.author
      Container.append(p2)

      let edit = document.createElement("button")
      edit.setAttribute("data-id",`${arr.id}`)
      edit.textContent = "Edit"
      edit.classList.add("edit-btn")
      edit.addEventListener("click",((e)=>{
      let currentdata = (getAllQuotes()).filter((x)=>x.id === Number(e.target.getAttribute("data-id")))
      console.log(currentdata[0]);
      submittype = currentdata[0].id
      contentInput.textContent = currentdata[0].content
      authorInput.textContent = currentdata[0].author
      }))
      Container.append(edit)

      let deletes = document.createElement("button")
      deletes.setAttribute("data-id",`${arr.id}`)
      deletes.textContent = "Delete"
      deletes.classList.add("delete-btn")
      deletes.addEventListener("click",((e)=>{
      console.log("DO DELETE");
      deleteQuoteFromDOM(Number(e.target.getAttribute("data-id")))
      }))
      Container.append(deletes)
    })
    
  }

  // a quote element example
  //<section id="quote-list">
  //  <div data-id="1">
  //    <p>Confidence comes from discipline and training</p>
  //    <p>Robert</p>
  //    <button class="edit-btn" data-id="1">
  //      Edit
  //    </button>
  //    <button class="delete-btn" data-id="1">
  //      Delete
  //    </button>
  //  </div>
  // </section>

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
  addQuote(quote.content,quote.author)
  renderQuotes()
}
function updateQuoteInDOM(quote) {
  updateQuote(quote.id,quote.content,quote.author)
  renderQuotes()
}
function deleteQuoteFromDOM(id) {
  deleteQuote(id)
  renderQuotes()
}
function renderQuotes() {
  quotes = getAllQuotes()
  createQuoteElement(quotes)
}
function showRandomQuote() {
  randomDisplay.innerHTML = ""
  let random = (getAllQuotes())[Math.floor(Math.random() * getAllQuotes().length)]
  let p1 = document.createElement("p")
  p1.textContent = random.content
  randomDisplay.append(p1)
  let p2 = document.createElement("p")
  p2.textContent = "---"
  randomDisplay.append(p2)
  let p3 = document.createElement("p")
  p3.textContent = random.author
  randomDisplay.append(p3)
}
// Event listeners for form submission, edit, and delete clicks



let submittype = "add"

form.addEventListener("submit",((e)=>{
  e.preventDefault()
  if(submittype === "add"){
    console.log("DO");
    addQuoteToDOM({content : contentInput.value,author : authorInput.value})
  }
  else{
    updateQuoteInDOM({id :submittype, content : contentInput.value, author : authorInput.value})
    submittype = "add"
  }
}))

randomBtn.addEventListener("click",(e)=>{
  showRandomQuote()
})

if(!getAllQuotes().length === 0){
  renderQuotes()
}
