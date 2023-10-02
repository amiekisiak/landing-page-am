
var lightbox = new SimpleLightbox(".stars-gallery a");
const scrollUp = document.querySelector("#scroll-up");
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navLink = document.querySelectorAll("#nav-link");
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function openMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
    // Toggle website theme
    document.body.classList.toggle("dark");
});