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
  
  // navigation appear on scroll
  document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.getElementById("navigation");
    const visibilityThreshold = 300; 
    let isVisible = false; 
  
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > visibilityThreshold && !isVisible) {
       
        navigation.classList.remove("hidden");
        navigation.classList.add("visible");
        isVisible = true; 
      } else if (currentScrollY <= visibilityThreshold && isVisible) {
        
        navigation.classList.remove("visible");
        navigation.classList.add("hidden");
        isVisible = false; 
      }
    });
  });

  // PROGRAMS MOBILE SLIDER
  document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-programs');
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    let currentIndex = 0;

    const slides = document.querySelectorAll('.slide-programs');
    const slideWidth = slides[0].offsetWidth;

    const setSliderPosition = () => {
      slider.style.transform = `translateX(${currentTranslate}px)`;
    };

    const animation = () => {
      setSliderPosition();
      if (isDragging) requestAnimationFrame(animation);
    };

    const touchStart = (index) => (event) => {
      isDragging = true;
      currentIndex = index;
      startX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
      prevTranslate = currentTranslate;
      animationID = requestAnimationFrame(animation);
    };

    const touchMove = (event) => {
      if (!isDragging) return;
      const currentX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
      const distance = currentX - startX;
      currentTranslate = prevTranslate + distance;
    };

    const touchEnd = () => {
      isDragging = false;
      cancelAnimationFrame(animationID);

      // Snap to nearest slide
      const movedBy = currentTranslate - prevTranslate;
      if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
      if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

      currentTranslate = -currentIndex * slideWidth;
      setSliderPosition();
    };

    slides.forEach((slide, index) => {
      slide.addEventListener('touchstart', touchStart(index));
      slide.addEventListener('touchmove', touchMove);
      slide.addEventListener('touchend', touchEnd);

      slide.addEventListener('mousedown', touchStart(index));
      slide.addEventListener('mousemove', touchMove);
      slide.addEventListener('mouseup', touchEnd);
      slide.addEventListener('mouseleave', touchEnd);
    });
  });