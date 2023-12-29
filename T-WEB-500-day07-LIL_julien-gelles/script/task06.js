let canvas = document.getElementsByTagName('canvas')[0];
let canvascoord = canvas.getBoundingClientRect();
let zone = document.querySelector('footer div');
let zonecoord = zone.getBoundingClientRect();
let dragstatus = false;

let leftmarg = canvascoord.left-zonecoord.left;
let rightmarg = canvascoord.right-zonecoord.right;
let topmarg = canvascoord.top-zonecoord.top;
let bottommarg = canvascoord.bottom-zonecoord.bottom;

canvas.addEventListener("mousedown", () => {
    dragstatus = true;
});
document.addEventListener("mouseup", () => {
    dragstatus = false;
});

document.addEventListener("mousemove", (e) => { 
    if (!dragstatus) return
    canvas.style.margin = '0';
    canvas.style.position = "relative";    

    if (e.pageX-canvascoord.left < -leftmarg+canvas.clientWidth/2) {
        canvas.style.left = -leftmarg +'px';
    }else if(e.pageX-canvascoord.left > -rightmarg+canvas.clientWidth/2){
        canvas.style.left = -rightmarg +'px';
    }else{   
        canvas.style.left = (e.pageX-canvascoord.left-canvas.clientWidth/2) +'px';
    }

    if (e.pageY-canvascoord.top < -topmarg+canvas.clientHeight/2) {
        canvas.style.top = -topmarg +'px';
    }else if(e.pageY-canvascoord.top > -bottommarg+canvas.clientHeight/2){
        canvas.style.top = -bottommarg +'px';
    }else{   
        canvas.style.top = (e.pageY-canvascoord.top-canvas.clientHeight/2) +'px';
    }

    document.getElementsByTagName("footer")[0].getElementsByTagName("div")[1].innerHTML = "New coordinates => {x:" + (Math.round(canvas.getBoundingClientRect().left-zone.getBoundingClientRect().left)) + ", y:" + (Math.round(canvas.getBoundingClientRect().top-zone.getBoundingClientRect().top)) + "}";

});