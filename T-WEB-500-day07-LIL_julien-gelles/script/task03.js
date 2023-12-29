let clickZone = document.querySelector('footer div')
let msg = ""

document.addEventListener("keydown", (e) => {
    msg += e.key;
    clickZone.innerHTML = msg.substring(msg.length-42, msg.length);
})