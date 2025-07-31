document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentSlide = 0;

    function showSlide(index) {
        // Remove a classe 'active' de todos os slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Adiciona a classe 'active' ao slide atual
        slides[index].classList.add('active');

        // Atualiza o estado dos botões
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === slides.length - 1;
    }

    // Event listener para o botão "Próximo"
    nextBtn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    });

    // Event listener para o botão "Anterior"
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    });

    // Inicializa a apresentação mostrando o primeiro slide
    showSlide(currentSlide);
});