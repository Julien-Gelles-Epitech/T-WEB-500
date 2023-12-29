let buttonPlus = document.getElementsByTagName("button")[0];
let buttonMinus = document.getElementsByTagName("button")[1];
let selection = document.getElementsByTagName("select")[0];
let body = document.getElementsByTagName("body")[0];
let fontsize = parseInt(window.getComputedStyle( body, null ).getPropertyValue('font-size'));

buttonPlus.addEventListener("click", () => {
    fontsize += 1;
    body.style.fontSize = fontsize + "px";
})
buttonMinus.addEventListener("click", () => {
    fontsize = Math.max(fontsize-1, 0);
    body.style.fontSize = fontsize + "px";
})
selection.addEventListener("change", () => {
    body.style.backgroundColor = selection.value;
})