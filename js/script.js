const navLinks = document.querySelectorAll(".header__nav__item a");
const sections = document.querySelectorAll(".section");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const sectionId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(sectionId);
    const currentSection = document.querySelector(".section.active");

    if (currentSection !== targetSection) {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      if (currentSection) {
        currentSection.classList.remove("active");
      }

      setTimeout(() => {
        sections.forEach((s) => s.classList.remove("active"));
        targetSection.classList.add("active");
      }, 100);
    }
  });
});

document.getElementById("nav-home").classList.add("active");
document.getElementById("home").classList.add("active");
