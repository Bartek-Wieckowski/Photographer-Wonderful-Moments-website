// Hamburger menu
const toggle = document.querySelector(".header__toggle--js");
const nav = document.querySelector(".nav--js");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
  toggle.classList.toggle("toggleX");
});
