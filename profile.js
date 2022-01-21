console.log("Hello world!");

let question = document.querySelector("#question");
let ritual = document.querySelector("#ritual");
let place = document.querySelector("#place");
let color = document.querySelector("#color");
let yesAnswer = document.querySelector("#yes-answer");
let noAnswer = document.querySelector("#no-answer");

let handleColor = (evt) => {
  evt.preventDefault();
  alert("Blue-green");
};
let handlePlace = (evt) => {
  evt.preventDefault();
  alert("My apartment");
};
let handleRitual = (evt) => {
  evt.preventDefault();
  alert("Food-coma after a big, yummy meal");
};

let handleQuestion = (evt) => {
  evt.preventDefault();
  // if (input === yesAnswer) {
  //   alert("Awesome!");
  // }
  // if (input === noAnswer) {
  //   ("You should try it!");
  // }
  alert("Thanks for letting me know!");
};

color.addEventListener("click", handleColor);
color.classList.add("big-yellow");

place.addEventListener("click", handlePlace);
place.classList.add("big-yellow");

ritual.addEventListener("click", handleRitual);
ritual.classList.add("big-yellow");

question.addEventListener("click", handleQuestion);
