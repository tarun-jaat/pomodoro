import React, { useState } from "react";

const arrofQuotes = [
  {
    author: " Steve Jobs",
    quotes: "The only way to do great work is to love what you do.",
  },
  {
    author: " Robert Frost",
    quotes: "In three words I can sum up everything I've learned about life: it goes on.",
  },
  {
    author: "Winston Churchill",
    quotes: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  },
  {
    author: "Franklin D. Roosevelt",
    quotes: "The only limit to our realization of tomorrow will be our doubts of today.",
  },
  {
    author: " Nelson Mandela",
    quotes: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    author: " Ralph Waldo Emerson",
    quotes: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  },
  {
    author: " Abraham Lincoln",
    quotes: "The best way to predict the future is to create it.",
  },
];

function Quotes() {
  // use state to store the current quote and author
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // define a function to set the data randomly from the array of quotes
  function setdata() {
    let random = Math.floor(Math.random() * arrofQuotes.length);
    setAuthor(arrofQuotes[random].author);
    setQuote(arrofQuotes[random].quotes);
  }

  // use a button to trigger the function
  return (
    <div className="App">
      <button className="btn" onClick={setdata}>
        Get a quote
      </button>
      <div className="content">
        <span>{quote}</span>
        <p id="author">{author}</p>
      </div>
    </div>
  );
}

export default Quotes;