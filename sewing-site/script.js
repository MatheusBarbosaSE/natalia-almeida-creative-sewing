// === Hero section animation on homepage ===
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-background");

  if (hero) {
    setTimeout(() => {
      hero.classList.add("hero-animate");
    }, 300);
  }
});

// === Menu Toggle for Mobile Navigation ===
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// === Fade-in animation on scroll ===
function handleFadeInOnScroll() {
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.9;

    if (isVisible) {
      el.classList.add("show");
    }
  });
}

// === Run fade effect on load and scroll ===
window.addEventListener("load", handleFadeInOnScroll);
window.addEventListener("scroll", handleFadeInOnScroll);
