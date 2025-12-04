document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Lógica de Animação Fade-In ---
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(sec => observer.observe(sec));


    // --- 2. Lógica do Modal de Imagem ---
    
    // Elementos do Modal
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    // Todos os elementos <a> que acionam o modal (a imagem)
    const modalTriggers = document.querySelectorAll('.open-modal-trigger');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            if (imageModal) {
                event.preventDefault(); 
                
                const imageUrl = this.getAttribute('data-image-url');
                
                modalImage.src = imageUrl;
            }
        });
    });

});