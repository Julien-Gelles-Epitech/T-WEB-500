let clickZone = document.querySelector('footer div')
let clickCounter = 0;

clickZone.addEventListener("click", () => {
    clickCounter+=1;
    clickZone.innerHTML = clickCounter;
})