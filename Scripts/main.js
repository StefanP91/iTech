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



document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider-students");
    const slides = document.querySelectorAll(".slide-student");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    let currentIndex = 0;
    // let visibleSlides = window.innerWidth <= 435 ? 1 : 3; // Set initial visible slides based on screen size
    if (window.innerWidth <= 435) {
        visibleSlides = 1; // For mobile view, show 1 slide
    }
    else {
        visibleSlides = 3; // For desktop view, show 3 slides
    }

    const totalSlides = slides.length;

    const updateSliderPosition = () => {
        const slideWidth = slides[0].offsetWidth;
        const offset = currentIndex * slideWidth; // Calculate the offset for the current index
        slider.style.transform = `translateX(-${offset}px)`;
    };

    const updateVisibleSlides = () => {
        // visibleSlides = window.innerWidth <= 435 ? 1 : 3; // Update visible slides based on screen size
        if (window.innerWidth <= 435) {
            visibleSlides = 1; // For mobile view, show 1 slide
        }
        else {
            visibleSlides = 3; // For desktop view, show 3 slides
        }
        currentIndex = Math.min(currentIndex, totalSlides - visibleSlides); // Ensure currentIndex is valid
        updateSliderPosition();
    };

    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalSlides - visibleSlides) {
            currentIndex++; 
            updateSliderPosition();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--; 
            updateSliderPosition();
        }
    });

    // Listen for window resize to adjust visible slides
    window.addEventListener("resize", updateVisibleSlides);

    // Initialize slider position
    updateSliderPosition();
});


// LEARN MORE BUTTONS ON STUDENT SUCCESS SLIDER
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".read-story");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const studentCard = button.closest(".slide-student").querySelector(".student-card");
            const studentDescription = studentCard.querySelector(".student-description");
            const overlay = studentCard.querySelector(".overlay");

            if (studentDescription && overlay) {
                // Display the student description
                studentDescription.style.display = "block";

                // Apply the overlay background color
                overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            } else {
                console.error("Elements not found!");
            }
        });
    });
});


// PROGRAMS OVERVIEW MOBILE SLIDER
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