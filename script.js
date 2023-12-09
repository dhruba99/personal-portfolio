// =======sticky navbar=======
window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY> 100);
}

//About section tab
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    } 
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// -----scroll reveal------
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading,.about-col-1', { origin: 'left' });
ScrollReveal().reveal('.sub-title,.home-img img', { origin: 'right' });

// ScrollReveal().reveal('', { origin: 'top' });
// ScrollReveal().reveal('.about-col-2', { origin: 'bottom' });

