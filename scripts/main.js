const newQuoteBtn = document.querySelector("button");
const quote = document.querySelector(".quote");
const authorName = document.querySelector(".author");

const QUOTES = [
  {
    content:
      "Genuine sincerity opens people's hearts, while manipulation causes them to close.",
    author: "Daisaku Ikeda",
  },
  {
    content:
      "The wisdom of the wise, and the experience of ages, may be preserved by quotation.",
    author: "Isaac D'Israeli",
  },
  {
    content: "When the solution is simple, God is answering.",
    author: "Albert Einstein",
  },
  {
    content:
      "If a man does not make new acquaintances as he advances through life, he will soon find himself left alone. A man, sir, should keep his friendship in a constant repair.",
    author: "Samuel Johnson",
  },
  {
    content:
      "Believe deep down in your heart that you're destined to do great things.",
    author: "Joe Paterno",
  },
  {
    content: "Meaning is not what you start with but what you end up with.",
    author: "Peter Elbow",
  },
  {
    content:
      "The superior man is modest in his speech but exceeds in his actions.",
    author: "Confucius",
  },
  {
    content: "The two most powerful warriors are patience and time.",
    author: "Leo Tolstoy",
  },
  {
    content:
      "Friendship with oneself is all important, because without it one cannot be friends with anyone else in the world.",
    author: "Eleanor Roosevelt",
  },
  {
    content: "Love isn't something you find. Love is something that finds you.",
    author: "Loretta Young",
  },
];

window.addEventListener("load", displayQuote);

newQuoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  const { content, author } = generateRandomQuote();

  quote.innerHTML = content;
  authorName.innerHTML = author;
}

let currentIndex = -1;

function generateRandomQuote() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * QUOTES.length);
  } while (newIndex === currentIndex);

  currentIndex = newIndex;

  return QUOTES[newIndex];
}
