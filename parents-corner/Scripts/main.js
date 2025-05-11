// Scroll to Top Button
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scrollToTop");
  
  
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) { 
            scrollToTopButton.classList.add("visible");
        } else {
            scrollToTopButton.classList.remove("visible");
        }
    });
  
  
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Accordion button
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function () {
  
      document.querySelectorAll('.accordion-button .icon').forEach(icon => {
        icon.textContent = '+';
      });
  
      const icon = this.querySelector('.icon');
      if (this.classList.contains('collapsed')) {
        icon.textContent = '+';
      } else {
        icon.textContent = '-';
      }
    });
});