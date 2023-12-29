window.addEventListener('load', () => {
    let creation_form = document.getElementsByTagName("form")[0];

    let create_input = creation_form.getElementsByTagName("input")[0];
    let create_select = creation_form.getElementsByTagName("select")[0];
    let create_button = creation_form.getElementsByTagName("input")[1];
    

    let search_form = document.getElementsByTagName("form")[1];

    let search_select = search_form.getElementsByTagName("select")[0];
    let search_button = search_form.getElementsByTagName("input")[0];
    let reset_button = search_form.getElementsByTagName("input")[1];


    let list = document.getElementsByTagName("ul")[0];


    create_button.addEventListener("click", (e) => {
        e.preventDefault();
        
        let new_li = document.createElement("li");
        new_li.innerText = create_input.value;
        new_li.classList.add(create_select.value);
        list.appendChild(new_li);
    })

    search_button.addEventListener("click", (e) => {
        e.preventDefault();

        let database = list.getElementsByTagName("li");
        
        for (let i = 0 ; i < database.length ; i++) {
            database[i].classList.remove("hidden")
        }

        for (let i = 0 ; i < database.length ; i++) {
            if (!database[i].classList.contains(search_select.value)) {
                database[i].classList.add("hidden")
            }
        }
    })

    reset_button.addEventListener("click", (e) => {
        e.preventDefault();

        let database = list.getElementsByTagName("li");
        
        for (let i = 0 ; i < database.length ; i++) {
            database[i].classList.remove("hidden")
        }
    })
})