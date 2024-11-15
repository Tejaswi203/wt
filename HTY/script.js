// script.js

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Basic form submission example
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from actually submitting
    alert('Form submitted!');
});
