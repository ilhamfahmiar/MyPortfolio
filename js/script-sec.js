/* menu icon navbar */

let menuIcon = document.querySelector('#menu-sec-icon');
let navbar = document.querySelector('.navbar-sec');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* scroll section active navbar */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/* Sticky Selector */
window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            if(id == 'home' || id == 'about' || id == 'skills' || id == 'portfolio' || id == 'contact'){
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id +']').classList.add('active');
                });
            }else{
                navLinks.forEach(links => {
                    links.classList.remove('active');
                });
            };
        };
    });

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* hapus menu navbar ketik click atau scroll */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* change dark mode */
let change = 0;
let darkModeIcon = document.querySelector('#darkMode-sec-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    if(change == 0){
        document.getElementById("img-webdimension").src="img/dimensionweb-dark.png";
        document.getElementById("img-webkasir").src="img/kasirweb-dark.png";
        change = 1;
    }else{
        document.getElementById("img-webdimension").src="img/dimensionweb-light.png";
        document.getElementById("img-webkasir").src="img/kasirweb-light.png";
        change = 0;
    }
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.title-page, .text', { origin: 'top' });
// ScrollReveal().reveal('.text', { origin: 'bottom' });
// ScrollReveal().reveal('.home-content h1, about-img img', { origin: 'left' });
// ScrollReveal().reveal('.home-content h3, home-content p, about-content', { origin: 'right' });
