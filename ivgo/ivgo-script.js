/* ============================
   FILMWAKER × IVGO LANDING PAGE
   JavaScript File
   ============================ */

/* Smooth scrolling for navigation links */
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", e => {
      const targetID = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetID);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

/* Button scroll actions */
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

/* Glow animation on hover for cards */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".package-card, .hero-card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transition = "box-shadow 0.3s ease";
      card.style.boxShadow = "0 0 25px rgba(0, 217, 255, 0.35)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "var(--shadow-soft)";
    });
  });
});
