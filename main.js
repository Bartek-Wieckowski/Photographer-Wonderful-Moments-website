// Hamburger menu
const toggle = document.querySelector(".header__toggle--js");
const nav = document.querySelector(".nav--js");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
  toggle.classList.toggle("toggleX");
});

// Removing hamburger menu after click
const allLinks = document.querySelectorAll(".nav__link");

const linkAction = function () {
  const navMenu = document.querySelector(".nav--js");
  navMenu.classList.remove("show-menu");
  toggle.classList.remove("toggleX");
};
allLinks.forEach((n) => n.addEventListener("click", linkAction));

// Get the modal
const modal = document.querySelector(".modal");

const images = document.querySelectorAll(".gallery-img");
const modalImg = document.querySelector(".modal-content");
const closeX = document.querySelector(".close");

// Show Modal
const showModal = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

// Close X Modal
const closeModal = function () {
  modal.style.display = "none";
};

// Event Handler
for (let i = 0; i < images.length; i++)
  images[i].addEventListener("click", showModal);

closeX.addEventListener("click", closeModal);

// Close Modal-key esc
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Opinion Swiper

let swiperOpinion = new Swiper(".opinion__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

// FORM ACTION
// access to necessary variables

const form = document.querySelector(".form");

const emailField = document.querySelector(".email");
const emailInput = emailField.querySelector("input");

// form - many actions after wrong filling - empty inputs

form.onsubmit = (event) => {
  event.preventDefault();

  if (emailInput.value == "") {
    emailField.classList.add("shake", "error");
  } else {
    checkEmail();
  }
  // After 400ms there will be a shake effect again, when inputs still fill wrong
  setTimeout(() => {
    firstNField.classList.remove("shake");
    lastNField.classList.remove("shake");
    emailField.classList.remove("shake");
    passwordField.classList.remove("shake");
  }, 400);

  //   email verification

  function checkEmail() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailInput.value.match(pattern)) {
      emailField.classList.add("error");
      let errorTxt = emailField.querySelector(".error-text");
      if (emailInput.value != "") {
        errorTxt.innerText = "Looks like this is not an email";
        emailField.classList.add("shake");
      } else {
        errorTxt.innerText = "Enter a valid email address";
      }
    } else {
      emailField.classList.remove("error");
    }
  }

  emailInput.onkeyup = () => {
    checkEmail();
  };

  // validation when the form will be sent
  if (!emailField.classList.contains("error")) {
    window.location.href = "#";
    console.log("Form SUBMITTED");
  }
};

// DARK/LIGHT MODE
let isDark = false;
const themeBtn = document.getElementById("theme-button");
const iconTheme = "bx-sun";

themeBtn.addEventListener("click", () => {
  themeBtn.classList.toggle(iconTheme);
  if (isDark == true) {
    document.documentElement.style.setProperty("--body-color", "#fff");
    document.documentElement.style.setProperty("--dark-color", "#000");

    isDark = false;
  } else {
    document.documentElement.style.setProperty("--body-color", "#000");
    document.documentElement.style.setProperty("--dark-color", "#fff");

    isDark = true;
  }
});
