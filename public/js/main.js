// Variable declarations
const hamburgerOpen = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburgerOpen.onclick = function () {
	this.classList.toggle("open-hamburger");
	menu.classList.toggle("open-menu");
};
