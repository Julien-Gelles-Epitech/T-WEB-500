window.addEventListener('load', () => {
    let input = document.getElementsByTagName("input")[0];
    let select = document.getElementsByTagName("select")[0];
    let submit_button = document.getElementsByTagName("input")[1];
    let list = document.getElementsByTagName("ul")[0];

    submit_button.addEventListener("click", (e) => {
        e.preventDefault();
        
        let new_li = document.createElement("li");
        new_li.innerText = input.value;
        new_li.classList.add(select.value);
        list.appendChild(new_li);
    })
})