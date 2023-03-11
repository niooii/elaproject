
document.getElementById("buttons").onmousemove = e => {
    for(const button of document.getElementsByClassName("button")) {
        const rect = button.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top
        button.style.setProperty("--mouse-x", x + 'px')
        button.style.setProperty("--mouse-y", y + 'px')
    }
}