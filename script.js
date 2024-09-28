// Função para manipular FAQ
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const isOpen = content.style.display === 'block';

        // Fecha todos os conteúdos FAQ
        document.querySelectorAll('.faq-content').forEach(item => item.style.display = 'none');

        // Se não estiver aberto, abre o conteúdo clicado
        if (!isOpen) {
            content.style.display = 'block';
        }
    });
});

// Efeito de rolagem suave
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
