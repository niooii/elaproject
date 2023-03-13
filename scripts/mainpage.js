

document.getElementById('1').addEventListener('click', function(e) {
    window.location.hash = '#position';
}, false);

document.getElementById('2').addEventListener('click', function(e) {
    window.location.hash = '#history';
}, false);

document.getElementById('3').addEventListener('click', function(e) {
    window.location.hash = '#poem';
}, false);

document.getElementById('4').addEventListener('click', function(e) {
    window.location.hash = '#interactions';
}, false);

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

function reveal() {
    const reveals = document.querySelectorAll(".section");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}