const menuIcon = document.querySelector("#menu-icon i");
const navLinks = document.querySelector(".nav-links");
const closeIcon = document.querySelector(".nav-links .close");

menuIcon.onclick = () => {
  navLinks.classList.add("active");
  closeIcon.style.display = "block";
};

closeIcon.onclick = () => {
  navLinks.classList.remove("active");
};