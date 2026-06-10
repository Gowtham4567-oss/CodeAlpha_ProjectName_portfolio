function handleFormSubmit(event) {
    event.preventDefault();
    
    const inputs = event.target.querySelectorAll('input, textarea');
    const name = inputs[0].value;
    
    alert(`Thank you for reaching out, ${name}! Your form submitted successfully.`);
    event.target.reset();
}

window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        sectionObserver.observe(section);
    });
});
