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

//   STUDENT SUCCESS SLIDER 1
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

//   STUDENT SUCCESS SLIDER 2
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider-students-2");
    const slides = document.querySelectorAll(".slide-student-2");
    const nextBtn = document.getElementById("nextBtn2");
    const prevBtn = document.getElementById("prevBtn2");

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

// LEARN MORE BUTTONS ON STUDENT SUCCESS SLIDER 2
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".read-story");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const studentCard = button.closest(".slide-student-2").querySelector(".student-card-2");
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