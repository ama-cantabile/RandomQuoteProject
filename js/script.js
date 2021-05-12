/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * Added five objects that has four properties to the "quotes" array.
***/

var quotes =
  [{
    quote: "You just have to start putting one foot in front of the other, making an effort to get healthy every day.",
    source: "Ali Vincent",
    citation: "Believe It, Be It: How Being the Biggest Loser Won Me Back My Life",
    year: "2009"
  },
  {
    quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    source: "Anne Frank",
    citation: "Diary of a Young Girl",
    year: "1952"
  },
  {
    quote: "When any two young people take it into their heads to marry, they are pretty sure by perseverance to carry their point, be they ever so poor, or ever so imprudent, or ever so little likely to be necessary to each other's ultimate comfort.",
    source: "Jane Austen",
    citation: "Persuasion",
    year: ""
  },
  {
    quote: "It can be a real struggle to accept that sometimes appearance can be more important than talent or intelligence.",
    source: "Jennifer Hudson",
    citation: "",
    year: "2012"
  },
  {
    quote: "Always work hard on something uncomfortably exciting.",
    source: "Larry Page",
    citation: "University of Michigan Commencement Address",
    year: "2009"
  }
  ]

/***
 * `getRandomQuote` function
 * This function generates random number from 0 to 4 (Total of five numbers which is the length of the array "quotes") and
 * returns a quote object based on the generated random number.
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNumber];
}

/***
 * `printQuote` function
 * This function get a quote object by calling a function "getRandomQuote()" and save the object to a varaible called "randomQuote".
 * To display the object data, this function uses a string variable "PtoHTML1" to display the data in HTML format.
 * If citation and year are not included in the object data, the string variable will ignore them and only displays quote and source data. 
***/

function printQuote() {
  let randomQuote = getRandomQuote();

  let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "</p>" + "<p class='source'>" + randomQuote.source;

  if (randomQuote.citation !== '') {
    PtoHTML1 += "<span class='citation'>" + randomQuote.citation + "</span>";
  }

  if (randomQuote.year !== '') {
    PtoHTML1 += "<span class='year'>" + randomQuote.year + "</span>" + "</p>"
  } else {
    PtoHTML1 += "</p>"
  }

  document.getElementById('quote-box').innerHTML = PtoHTML1;

  console.log(randomQuote);

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);