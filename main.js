// Hamburger menu
const toggle = document.querySelector(".header__toggle--js");
const nav = document.querySelector(".nav--js");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
  toggle.classList.toggle("toggleX");
});

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
