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

let place = document.querySelector("#place");
place.addEventListener("click", handlePlace);

let ritual = document.querySelector("#ritual");
ritual.addEventListener("click", handleRitual);
