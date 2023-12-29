window.addEventListener("load", (e) => {
    let submit = document.getElementById("form");
    submit.addEventListener("submit", sendData);
    
    async function sendData(e){
        e.preventDefault();
        const data = new FormData(submit);

        await fetch("task04.php", {
            method: "POST",
            body: data
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
    }

});