
document.addEventListener('DOMContentLoaded', () => {
            const slideContainer = document.getElementById('slide-container');
            const slides = document.querySelectorAll('.slide');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            let currentSlide = 0;

            function updateNavButtons() {
                // Lógica para mostrar/esconder botões
                prevBtn.classList.toggle('hidden', currentSlide === 0);
                nextBtn.classList.toggle('hidden', currentSlide === slides.length - 1);
            }

            function goToSlide(slideIndex) {
                if (slideIndex >= 0 && slideIndex < slides.length) {
                    slides[slideIndex].scrollIntoView({ behavior: 'smooth' });
                    currentSlide = slideIndex;
                    updateNavButtons();
                }
            }

            // Navegação com botões
            prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
            nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

            // Navegação com scroll do mouse
            let scrollTimeout;
            slideContainer.addEventListener('scroll', () => {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    const slideHeight = window.innerHeight;
                    const newSlideIndex = Math.round(slideContainer.scrollTop / slideHeight);
                    if (newSlideIndex !== currentSlide) {
                        currentSlide = newSlideIndex;
                        updateNavButtons();
                    }
                }, 150);
            });
            
            // Navegação com teclas de seta
            window.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                    e.preventDefault();
                    goToSlide(currentSlide + 1);
                } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                    e.preventDefault();
                    goToSlide(currentSlide - 1);
                }
            });

            // Inicializa os botões
            updateNavButtons();
        });
