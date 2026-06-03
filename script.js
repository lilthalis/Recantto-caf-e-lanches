// Navbar muda ao rolar

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 100){

        navbar.style.background =
        "rgba(0,0,0,.95)";

    }else{

        navbar.style.background =
        "rgba(0,0,0,.7)";
    }
});

// Scroll Reveal simples

const cards =
document.querySelectorAll(
".menu-card, .feature"
);

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";
        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
    "translateY(40px)";

    card.style.transition =
    ".8s ease";

    observer.observe(card);

});