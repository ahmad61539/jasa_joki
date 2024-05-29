document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Terima kasih telah menghubungi kami!');
});

// Add smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
