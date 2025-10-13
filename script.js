const helloButton = document.getElementById("hello-button");
const helloText = document.getElementById("hello-text");

const greetings = [
  "Привет",
  "Hello",
  "Bonjour",
  "Hola",
  "你好",
  "Ciao",
  "Salut",
  "Ola",
  "Goedendag",
  "こんにちは",
  "Shalom",
];

helloButton.addEventListener("click", () => {
  helloText.innerText = greetings[Math.floor(Math.random() * greetings.length)];
});
