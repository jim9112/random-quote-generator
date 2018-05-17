// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function print(message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
  }

// generate a random number between 1 and 4
function randomNum() {
    return Math.floor(Math.random() * 5 );
}


// test random number 
console.log(randomNum());


// pull random quote
function getRandomQuote(quote) {
    var quote = quotes[randomNum()];
    return quote;
}

// test random quote
console.log(getRandomQuote());



// function to print quote
function printQuote() {
    var quoteToPrint = getRandomQuote();
    var display = '<p class="quote">' + quoteToPrint.quote + '</p>';
    display += '<p class="source">' + quoteToPrint.source;
    if (quoteToPrint.citation.length > 0){
        display += '<span class="citation">'+ quoteToPrint.citation + '</span>'
    }
    if (quoteToPrint.date.length > 0){
        display += '<span class="year">'+ quoteToPrint.date + '</span>'
    }
     display += '</p>';
    var div = document.getElementById('quote-box');
    div.innerHTML = display;
}