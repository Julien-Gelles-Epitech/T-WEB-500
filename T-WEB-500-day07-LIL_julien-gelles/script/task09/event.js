window.addEventListener('load', () => {
    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", () => {
        let paragraphs = document.getElementsByTagName("p");
        tmp = paragraphs.length
        for (let i = 0 ; i < tmp ; i++) {
            paragraphs[0].remove();
        }
    })
})