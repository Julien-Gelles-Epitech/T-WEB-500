window.addEventListener('load', () => {
    let elements = document.getElementsByTagName("a");
    for (let i = 0 ; i < elements.length ; i++) {
        if (elements[i].target != "_blank") {
            elements[i].style.opacity = 0.5;
        }
    }

})