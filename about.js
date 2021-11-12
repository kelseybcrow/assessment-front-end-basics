console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();
  // console.log("form submit");
  alert("The form has been submitted!");
}

let compliment = (evt) => {
  evt.preventDefault();
  alert("You are so cool!");
};

let form = document.querySelector("form#contact");
form.addEventListener("submit", handleSubmit);

let img = document.querySelector("img");
img.addEventListener("mouseover", compliment);
