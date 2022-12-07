const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello, world!");
});

app.get("/terminator", (request, response) => {
  response.send("I'll be back");
  // response.send("Hasta la vista, baby")
});

app.get("/timgunn", (request, response) => {
  response.send("Make it work");
});

app.get("/SteveMcGarrett", (request, response) => {
  response.send("Book 'em Danno!");
});

app.get("/captainAmerica", (request, response) => {
  response.send("Avengers Assemble!");
});

app.get("/spiderman", (request, response) => {
  response.send("My Spider-Sense is tingling!");
});

app.get("/regis", (request, response) => {
  response.send("Is that your final answer?");
});

app.get("/rocky", (request, response) => {
  response.send("Yo, Adrian");
});

app.get("/steverogers", (request, response) => {
  response.send("I can do this all day");
});

app.get("/groot", (request, response) => {
  response.send("I am groot");
});

app.get("/drstrange", (request, response) => {
  response.send("Dormammu, I've come to bargain");
});

function getRandomInt() {
  return Math.floor(Math.random() * 19);
}

const magic8Responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - Definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes, and signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

// Magic 8Ball
app.get("/magic8", (request, response) => {
  // console.log(magic8Responses[2])
  const randomNum = getRandomInt();
  // console.log(magic8Responses[randomNum])
  response.send(`<h1>${magic8Responses[randomNum]}</h1>`);
});

module.exports = app;
