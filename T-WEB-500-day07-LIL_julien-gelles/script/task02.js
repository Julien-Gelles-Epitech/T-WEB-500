let clickZone = document.querySelector('footer div')
document.get

clickZone.addEventListener("click", () => {
    let name = prompt("What's your name ?");
    while (name === "") {
        name = prompt("What's your name ?");
    }
    if (name == null) return
    let confirmation = confirm("Are you sure that " + name + " is your name ?");
    if (confirmation) {
        alert ("Hello " + name + " !");
        clickZone.innerHTML = "Hello " + name + " !";
    }

})