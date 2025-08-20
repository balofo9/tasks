// Aguarda o conteúdo da página carregar completamente antes de executar o script.
// É uma boa prática para garantir que todos os elementos HTML estejam disponíveis.
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os elementos importantes do DOM (Document Object Model)
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    
    // Variável para manter o controle do slide atualmente visível.
    // Começa em 0, que é o índice do primeiro slide.
    let currentSlide = 0;
    
    // Função para mostrar um slide específico.
    // O 'slideIndex' é o número (índice) do slide que queremos mostrar.
    function showSlide(slideIndex) {
        // Primeiro, removemos a classe 'active' de todos os slides para escondê-los.
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Em seguida, adicionamos a classe 'active' apenas ao slide que queremos mostrar.
        slides[slideIndex].classList.add('active');
    }
    
    // Adiciona um "ouvinte de evento" de clique ao botão "próximo".
    nextButton.addEventListener('click', () => {
        // Incrementa o índice do slide atual.
        // O operador '%' (módulo) faz com que o contador volte a 0 se ele ultrapassar o número total de slides.
        // Ex: Se temos 2 slides (índices 0 e 1), (1 + 1) % 2 = 0. Isso cria o loop.
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Chama a função para mostrar o novo slide.
        showSlide(currentSlide);
    });
    
    // Adiciona um "ouvinte de evento" de clique ao botão "anterior".
    prevButton.addEventListener('click', () => {
        // Decrementa o índice do slide atual.
        // A lógica '(currentSlide - 1 + slides.length) % slides.length' garante que, se estivermos no primeiro slide (0),
        // ele vá para o último slide, evitando um índice negativo.
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        
        // Chama a função para mostrar o novo slide.
        showSlide(currentSlide);
    });
    
    // Inicializa o slider mostrando o primeiro slide assim que a página carrega.
    showSlide(currentSlide);

});