window.addEventListener('load', () => {
    let paragraphs = document.getElementsByTagName("p");

    for (let i=0 ; i < paragraphs.length ; i++) {
        paragraphs[i].addEventListener("mouseover", () => {
            paragraphs[i].classList.add("blue");
        })

        paragraphs[i].addEventListener("mouseleave", () => {
            paragraphs[i].classList.remove("blue");
        })

        paragraphs[i].addEventListener("click", () => {
            paragraphs[i].classList.toggle("highlighted");
        })
    }
})