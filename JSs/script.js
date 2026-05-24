const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//========menu==========//

const menu = document.getElementById("menu");

function openMenu() {
  menu.classList.toggle("active");
}

//========book in stock==========//

// JavaScript

const section = document.querySelector(".back-stock-content");

window.addEventListener("scroll", () => {
  const sectionTop = section.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100) {
    section.style.opacity = "1";
    section.style.transform = "translateY(0px)";
  }
});

/* animation start style */

section.style.opacity = "0";

section.style.transform = "translateY(80px)";

section.style.transition = "1s ease";

//==============new in===========//

// JavaScript

const newSection = document.querySelector(".new-in-content");

window.addEventListener("scroll", () => {
  const top = newSection.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    newSection.style.opacity = "1";
    newSection.style.transform = "translateY(0px)";
  }
});

/* start animation */

newSection.style.opacity = "0";

newSection.style.transform = "translateY(80px)";

newSection.style.transition = "1s ease";

//=======jeans colection=========//

// JavaScript

const jeansContent = document.querySelector(".jeans-content");

window.addEventListener("scroll", () => {
  const sectionTop = jeansContent.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100) {
    jeansContent.style.opacity = "1";
    jeansContent.style.transform = "translateY(0)";
  }
});

/* start style */

jeansContent.style.opacity = "0";

jeansContent.style.transform = "translateY(70px)";

jeansContent.style.transition = "1s ease";

//===============dress colection===============//

// JavaScript

const dressContent = document.querySelector(".dress-content");

window.addEventListener("scroll", () => {
  const top = dressContent.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    dressContent.style.opacity = "1";

    dressContent.style.transform = "translateY(0)";
  }
});

/* start animation */

dressContent.style.opacity = "0";

dressContent.style.transform = "translateY(70px)";

dressContent.style.transition = "1s ease";

//===========suit colection============//

// JavaScript

const suitContent = document.querySelector(".suit-content");

window.addEventListener("scroll", () => {
  const top = suitContent.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    suitContent.style.opacity = "1";

    suitContent.style.transform = "translateY(0)";
  }
});

/* start animation */

suitContent.style.opacity = "0";

suitContent.style.transform = "translateY(70px)";

suitContent.style.transition = "1s ease";
