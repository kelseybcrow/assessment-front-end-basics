console.log("Hello world!");

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

let color = document.querySelector("#color");
color.addEventListener("click", handleColor);
color.classList.add("big-yellow");

let place = document.querySelector("#place");
place.addEventListener("click", handlePlace);
place.classList.add("big-yellow");

let ritual = document.querySelector("#ritual");
ritual.addEventListener("click", handleRitual);
ritual.classList.add("big-yellow");
