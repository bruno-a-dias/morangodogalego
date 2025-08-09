// Menu com rolagem suave
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Botão WhatsApp
document.getElementById('whatsapp-button').onclick = function() {
    window.open('https://wa.me/5561999192755?text=Olá! Quero um Morango do Amor 🍓', '_blank');
}

// Botão Instagram
document.getElementById('instagram-button').onclick = function() {
    window.open('https://instagram.com/morangodogalego', '_blank');
}
