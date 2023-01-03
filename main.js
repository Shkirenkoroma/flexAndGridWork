const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");
selected.addEventListener("click", () => {
	optionsContainer.classList.toggle("active");
});

let menuButton = document.querySelector(".menu-button");
let menu = document.querySelector(".menu-button__stylelists");
menuButton.addEventListener("click", function () {
	menuButton.classList.toggle("menu-button-active");
	menu.classList.toggle("menu-button__stylelists-active");
});
