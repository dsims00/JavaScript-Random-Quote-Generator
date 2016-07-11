// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var message;


//print function to print the randomly selected quote to the page
function print(message) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = message
}

// create array with quote objects
var quotes = [
	{
		quote: "If a man does his best, what else is there?",
		source: "General George S. Patton",
		citation: "http://www.brainyquote.com/quotes/quotes/g/georgespa103560.html",
		year: 1885,
		tags: "Inspirational"
	},

	{
		quote: "To live is the rarest thing in the world Most people exist, that is all.",
		source: "Oscar Wilde",
		citation: "www.goodreads.com/quotes",
		year: 1854,
		tags: "Inspirational"
	},

	{
		quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
		source: "Aristotle",
		citation: "http://www.brainyquote.com/quotes/quotes/a/aristotle145967.html",
		year: 384,
		tags: "Motivational"
	},

	{
		quote: "Be yourself; everyone else is already taken.",
		source: "Oscar Wilde",
		citation: "https://www.goodreads.com/quotes",
		year: 1854,
		tags: "Inspirational"
	},

	{
		quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
		source: "Bernard M. Baruch",
		citation: "https://www.goodreads.com/quotes",
		year: 1970,
		tags: "Inspirational, Motivational"
	}
];

// A function that creates a random number between 0 and the length of quotes to randomly select an object or index of quotes array and return the value of it.
function getRandomQuote() {
	var selectQuote = quotes[Math.floor(Math.random() * quotes.length)];
	return selectQuote;
}

// Randomly change background color when the quote changes.

function randomColors() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var colors = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return colors;
	}

// Stores getRandomQuote() in the printObject variable. Concats object to message variable as a string of <p> and <spans>

function printQuote() {
	var printObject = getRandomQuote();
	message += '<p class="quote">' + printObject.quote + '</p>';
	message += '<p class="source">' +  printObject.source + '';

	if (printObject.citation !== undefined) {
		message += '<span class="citation">' + printObject.citation + '</span>'
	}

	if(printObject.year !== undefined) {
		message += '<span class="year">' + printObject.year + '</span>'
	}
	message+= '<p class="tags">' + printObject.tags + '</p>';

	// Prints message, resets message variable  after each click. Stores randomColors() in getRandomColors variable.
	print(message);
	message = '';
	var getRandomColors = randomColors();
	document.body.style.backgroundColor = getRandomColors;
}



