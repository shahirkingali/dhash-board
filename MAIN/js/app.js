const goBtn = document.getElementById("gobtn");
const emailInput = document.getElementById("email");
const formContainer = document.querySelector(".form-container");

goBtn.addEventListener("click", () => {
  const regEx_Email =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!regEx_Email.test(emailInput.value)) {
    formContainer.classList.toggle("show");
    emailInput.style.border = "2px solid hsl(0, 94%, 66%)";
  } else {
    emailInput.style.border = "2px solid hsl(120, 100%, 50%)";
    formContainer.classList.remove("show");
  }
});

// Mobile Navigation

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const iconHamburger = document.querySelector(".iconHamburger");
const headerContainer = document.querySelector(".header-container");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    iconHamburger.src = "../images/icon-close.svg";
    headerContainer.classList.add("overlay");
  } else {
    iconHamburger.src = "../images/icon-hamburger.svg";
    headerContainer.classList.remove("overlay");
  }
});
