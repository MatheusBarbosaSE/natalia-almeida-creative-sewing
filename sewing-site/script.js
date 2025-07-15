// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-background");

  // Adds 'hero-animate' class after short delay
  setTimeout(() => {
    hero.classList.add("hero-animate");
  }, 300); // delay in milliseconds
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
