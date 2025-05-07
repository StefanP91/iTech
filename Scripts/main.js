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

//   DESKTOP SLIDER STUDENT SUCCESS
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider-students");
    const slides = document.querySelectorAll(".slide-student");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    let currentIndex = 0;
    const visibleSlides = 3; // Number of slides visible at a time
    const totalSlides = slides.length;

    const updateSliderPosition = () => {
        const slideWidth = slides[0].offsetWidth;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
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

    updateSliderPosition();
});

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
