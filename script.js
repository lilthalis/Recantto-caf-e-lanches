const navbar = document.querySelector('.navbar');
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const whatsappLinks = document.querySelectorAll('.whatsapp-link');
const phoneNumber = '5500000000000';

function buildWhatsappUrl(product = '') {
    const message = `Olá!\n\nGostaria de fazer um pedido.\n\nNome:\nProduto:${product ? ` ${product}` : ''}\nObservações:`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
});

toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    });
});

whatsappLinks.forEach(link => {
    link.href = buildWhatsappUrl(link.dataset.product || '');
    link.target = '_blank';
    link.rel = 'noreferrer';
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
