// Ensure the first slide is visible on load
document.getElementById('radio-1').checked = true;

const slides = document.querySelectorAll('.Set_image');
const radios = document.querySelectorAll('.radio');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlide = 0; // Tracks the currently visible slide

// Function to update visible slide based on index
function updateSlide(index) {
    slides.forEach((slide, idx) => {
        slide.style.display = idx === index ? 'block' : 'none';
    });

    // Update the checked radio button
    radios[index].checked = true;
}

// Function to move to the previous slide
function showPrevSlide() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    updateSlide(currentSlide);
}

// Function to move to the next slide
function showNextSlide() {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    updateSlide(currentSlide);
}

// Attach event listeners to radio buttons
radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        currentSlide = index; // Update the currentSlide index
        updateSlide(currentSlide);
    });
});

// Attach event listeners to prev and next buttons
prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

// Initialize the first slide
updateSlide(0);
