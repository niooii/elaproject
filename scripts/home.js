

document.getElementById('b1').addEventListener('click', function(e) {
    window.location.href = 'pages/positions.html#position';
}, false);

document.getElementById('b2').addEventListener('click', function(e) {
    window.location.href = 'pages/positions.html#history';
}, false);

document.getElementById('b3').addEventListener('click', function(e) {
    window.location.href = 'pages/positions.html#poem';
}, false);

document.getElementById('b4').addEventListener('click', function(e) {
    window.location.href = 'pages/positions.html#interactions';
}, false);

document.getElementById("buttons").onmousemove = e => {
    for(const button of document.getElementsByClassName("button")) {
        const rect = button.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top
        button.style.setProperty("--mouse-x", x + 'px')
        button.style.setProperty("--mouse-y", y + 'px')
    }
}