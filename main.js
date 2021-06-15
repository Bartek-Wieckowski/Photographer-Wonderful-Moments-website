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
  closeModal();
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
  document.body.classList.add("stop-scrolling");
};

// Close X Modal
const closeModal = function () {
  modal.style.display = "none";
  document.body.classList.remove("stop-scrolling");
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

// Form - many actions after wrong filling - empty inputs

form.onsubmit = (event) => {
  event.preventDefault();

  if (emailInput.value == "") {
    emailField.classList.add("shake", "error");
  } else {
    checkEmail();
  }
  // After 400ms there will be a shake effect again, when inputs still fill wrong
  setTimeout(() => {
    emailField.classList.remove("shake");
  }, 400);

  // Email verification

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

  // Validation when the form will be sent
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
    document.documentElement.style.setProperty("--dark-color", "#20262b");

    isDark = false;
  } else {
    document.documentElement.style.setProperty("--body-color", "#20262b");
    document.documentElement.style.setProperty("--dark-color", "#fff");

    isDark = true;
  }
});

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  duration: 2500,
  reset: true,
});
// data
sr.reveal(".home__data", { origin: "left", distance: "70px", delay: 500 });

// imgs
sr.reveal(".home__img, .about__img", {
  origin: "top",
  distance: "90px",
  delay: 200,
});

// content
sr.reveal(".camera__description, .contact__data", {
  origin: "bottom",
  distance: "190px",
  delay: 400,
  reset: false,
});

// header logo
const srMobile = ScrollReveal({
  duration: 2500,
  reset: false,
});
srMobile.reveal(".header__img", {
  origin: "top",
  distance: "1px",
  delay: 200,
  mobile: false,
});

// Social icon

const icon = document.querySelector(".icon1");
const socialObject = document.querySelector(".social-object");
const moveIcon = document.querySelectorAll(".mov-icon");

icon.addEventListener("click", () => {
  socialObject.classList.toggle("active");

  moveIcon.forEach((el) => {
    el.classList.add("showOpacity");
  });
});

// Removing after click icon
const allIconSocial = document.querySelectorAll(".icon-social");

const iconAction = function () {
  socialObject.classList.remove("active");
};
allIconSocial.forEach((n) => n.addEventListener("click", iconAction));

// Show icon only in footer
const rootElement = document.documentElement;
const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

const showIcon = function () {
  if (rootElement.scrollTop / scrollTotal > 1.25) {
    icon.classList.add("show-icon");
  } else {
    icon.classList.remove("show-icon");
    moveIcon.forEach((el) => {
      el.classList.remove("showOpacity");
    });
  }
};
window.addEventListener("scroll", showIcon);
