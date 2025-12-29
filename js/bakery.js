window.addEventListener("scroll", function() {
  const navbar = document.getElementById("nav");
  const aboutSection = document.getElementById("about");

  if (!navbar || !aboutSection) return;

  const sectionTop = aboutSection.offsetTop;
  const scrollY = window.scrollY;

  if (scrollY >= sectionTop - 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const burgerIcon = document.getElementById("burgerIcon");
const navMenu = document.getElementById("navMenu");

burgerIcon.addEventListener("click", function() {
    navMenu.classList.toggle("show"); 
});
document.querySelectorAll('.navmenu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", function() {
    if (window.scrollY > 600) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();        
        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
    });
}