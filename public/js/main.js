// Variable declarations
const hamburgerOpen = document.getElementById("menu-open");
const hamburgerClose = document.getElementById("menu-close");
const menu = document.getElementById("menu");
const nav = document.querySelectorAll(".nav-links");

hamburgerOpen.onclick = function () {
	this.classList.add("open-hamburger");
	menu.classList.add("open-menu");
};

hamburgerClose.onclick = function () {
	hamburgerOpen.classList.remove("open-hamburger");
	menu.classList.remove("open-menu");
};
