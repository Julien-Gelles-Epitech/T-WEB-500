window.addEventListener('load', () => {
    let button = document.getElementsByTagName("button")[0];
    let input = document.getElementById("listItem");

    button.addEventListener("click", () => {
        let div = document.createElement("div");
        div.innerText = input.value;
        document.body.appendChild(div);
    })
})