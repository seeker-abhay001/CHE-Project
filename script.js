// This script will add a smooth scroll effect for all navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 60,  // Adjust for navbar height
            behavior: 'smooth'
        });
    });
});
