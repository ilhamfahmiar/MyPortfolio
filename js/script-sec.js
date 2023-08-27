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
let dark_id = document.querySelector('section').getAttribute('id');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    if(change == 0){
        if(dark_id == 'headerweb'){
            document.getElementById("img-webdimension").src="img/dimensionweb-dark.png";
            document.getElementById("img-webkasir").src="img/kasirweb-dark.png";
        }else if(dark_id == 'headerapp'){
            document.getElementById("img-appalent").src="img/alentapp-dark.png";
            document.getElementById("img-appdimension").src="img/Dimensionapp-dark.png";
            document.getElementById("img-appiot").src="img/IoTapp-dark.png";
            document.getElementById("img-appcalcu").src="img/Calcuapp-dark.png";
        }else if(dark_id == 'headerui'){
            document.getElementById("img-haydayui").src="img/haydayfarm-ui-dark.png";
            document.getElementById("img-alentui").src="img/alentapp-ui-dark.png";
            document.getElementById("img-dimensionui").src="img/Dimension-ui-dark.png";
            document.getElementById("img-casierui").src="img/Casier-ui-dark.png";
            document.getElementById("img-swkui").src="img/swk-ui-dark.png";
            document.getElementById("img-ceritaprintui").src="img/ceritaprint-ui-dark.png";
            document.getElementById("img-carijajanviaui").src="img/carijajanvia-ui-dark.png";
        }else if(dark_id == 'headeriot'){
            document.getElementById("img-distance").src="img/Distance-logo-dark.png";
            document.getElementById("img-mika").src="img/Mika-logo-dark.png";
            document.getElementById("img-gas").src="img/gas-leak logo-dark.png";
            document.getElementById("img-toilet").src="img/Smart-toilet logo-dark.png";
            document.getElementById("img-timer").src="img/astable logo-dark.png";
        }else if(dark_id == 'headerml'){
            document.getElementById("img-face").src="img/Face-detection-dark.png";
            document.getElementById("img-shape").src="img/shape-detection-dark.png";
        }
        change = 1;
    }else{
        if(dark_id == 'headerweb'){
            document.getElementById("img-webdimension").src="img/dimensionweb-light.png";
            document.getElementById("img-webkasir").src="img/kasirweb-light.png";
        }else if(dark_id == 'headerapp'){
            document.getElementById("img-appalent").src="img/alentapp-light.png";
            document.getElementById("img-appdimension").src="img/Dimensionapp-light.png";
            document.getElementById("img-appiot").src="img/IoTapp-light.png";
            document.getElementById("img-appcalcu").src="img/Calcuapp-light.png";    
        }else if(dark_id == 'headerui'){
            document.getElementById("img-haydayui").src="img/haydayfarm-ui-light.png";
            document.getElementById("img-alentui").src="img/alentapp-ui-light.png";
            document.getElementById("img-dimensionui").src="img/Dimension-ui-light.png";
            document.getElementById("img-casierui").src="img/Casier-ui-light.png";
            document.getElementById("img-swkui").src="img/swk-ui-light.png";
            document.getElementById("img-ceritaprintui").src="img/ceritaprint-ui-light.png";
            document.getElementById("img-carijajanviaui").src="img/carijajanvia-ui-light.png";
        }else if(dark_id == 'headeriot'){
            document.getElementById("img-distance").src="img/Distance-logo-light.png";
            document.getElementById("img-mika").src="img/Mika-logo-light.png";
            document.getElementById("img-gas").src="img/gas-leak logo-light.png";
            document.getElementById("img-toilet").src="img/Smart-toilet logo-light.png";
            document.getElementById("img-timer").src="img/astable logo-light.png";
        }else if(dark_id == 'headerml'){
            document.getElementById("img-face").src="img/Face-detection-light.png";
            document.getElementById("img-shape").src="img/shape-detection-light.png";
        }
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
