// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// changes quote and background color every 30 seconds automatically
var intervalID = window.setInterval(printQuote, 30000);

// call printQuote function so page loads with a quote
printQuote();

// generate a random number between 1 and 4 ( didnt add +1 at end so I could get 0 as an option)
function randomNum() {
    return Math.floor(Math.random() * quotes.length);
}

// pull random quote
function getRandomQuote(quote) {
    var quote = quotes[randomNum()];
    return quote;
}

// random number generator for rgb colors
function randomColorNum() {
    return Math.floor(Math.random() * 256 );
}

// random color generator for background
function randomColor() {
 var color1 = randomColorNum();
 var color2 = randomColorNum();
 var color3 = randomColorNum();   
 document.body.style.backgroundColor = "rgb(" + color1+","+ color2+","+ color3+")";
 document.getElementById("loadQuote").style.backgroundColor = "rgb(" + color1+","+ color2+","+ color3+")";
}

// function to print quote
function printQuote() {
    var quoteToPrint = getRandomQuote();
    var display = '<p class="quote">' + quoteToPrint.quote + '</p>';
    display += '<p class="source">' + quoteToPrint.source;

    // displays citation if available
    if (quoteToPrint.citation.length > 0) {
        display += '<span class="citation">' + quoteToPrint.citation + '</span>'
    }

    // displays year of quote if available
    if (quoteToPrint.year.length > 0) {
        display += '<span class="year">' + quoteToPrint.year + '</span>'
    }

    // close paragraph statement
    display += '</p>';

    // displays a link to where the quote was found if available
    if (quoteToPrint.retrieved.length > 0) {
    display += '<p class="retrieved-from">Retrieved From: <a href="' + quoteToPrint.retrieved + '">'+ quoteToPrint.retrieved +'t</a></p>';
    }
    var div = document.getElementById('quote-box');
    div.innerHTML = display;

    // calls function to change background color
    randomColor();
}