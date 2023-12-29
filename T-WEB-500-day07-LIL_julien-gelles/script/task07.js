function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/; Samesite=None; Secure";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(){
    if (getCookie("acceptsCookies")){
        let box1 = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
        box1.innerHTML = "";
        const box2 = document.createElement("div");
        const button = document.createElement("button");
        button.setAttribute('type', 'button');
        button.innerHTML = "Delete the cookie"
        button.addEventListener("click", () => {
            setCookie("acceptsCookies", "true", 0)
            checkCookie()
        })
        box2.appendChild(button);
        document.getElementsByTagName("footer")[0].appendChild(box2)
    }else{
        let box1 = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
        box1.innerHTML = "This site uses cookies, click on OK if you accept their use.";
        const link = document.createElement("a");
        link.setAttribute('href', '#');
        link.innerHTML = "OK"
        box1.appendChild(link)
        link.addEventListener("click", () => {
            setCookie("acceptsCookies", "true", 1)
            checkCookie()
        })
        let box2 = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[1];
        if (box2) box2.remove()
    }
}
checkCookie()
