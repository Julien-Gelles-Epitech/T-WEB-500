window.onload = () => {

    var size;
    if (window.innerWidth < 768){size = 0;}
    else if (window.innerWidth < 1025){size = 1;}else{size = 2;}
    console.log(size);

    window.addEventListener("resize", (event) => {
        if (size==0 && window.innerWidth > 767){
            size = 1
            rehtml(1)
            console.log("enter 1");
        }
        if (size==1 && window.innerWidth < 768) {
            size = 0
            rehtml(0)
            console.log("enter 0");
        }
        if (size==1 && window.innerWidth > 1024) {
            size = 2
            rehtml(2)
            console.log("enter 2");
        }
        if (size==2 && window.innerWidth < 1025) {
            size = 1
            rehtml(1)
            console.log("enter 1");
        }
    });

    var body = document.getElementsByTagName("body")[0];
    
    function rehtml(s){
        if (s==0){
            document.getElementsByTagName("body")[0].innerHTML = '<div class="scroll"><div class="panel panel1"><div class="img"><img src="img/me.png" alt=""></div><div class="name"><h1>GELLES<br>Julien</h1><p>50.6557° N<br>02.8292° E</p></div><div class="title"><h3>WEB DEVELOPPER</h3></div></div><div class="panel panel6"><div class="projects"><a href="#"><img src="img/projects.png" alt=""></a></div><div class="project"><h1>My Portfolio</h1></div></div><div class="panel panel5"><div class="skill"><h1>My Skills</h1></div><div class="languages"><p>HTML</p><div><img src="img/html.png" alt=""></div><div><img src="img/python.png" alt=""></div><p>PYTHON</p><p>CSS</p><div><img src="img/css.png" alt=""></div><div><img src="img/java.png" alt=""></div><p>JAVA</p><p>JS</p><div><img src="img/js.png" alt=""></div><div><img src="img/spring.png" alt=""></div><p>SPRING</p><p>REACT</p><div><img src="img/react.png" alt=""></div><div><img src="img/c.png" alt=""></div><p>C</p><p>PHP</p><div><img src="img/php.png" alt=""></div><div><img src="img/docker.png" alt=""></div><p>DOCKER<p></div><div class="skills"><p>Blender</p><div><img src="img/blender.png" alt=""></div><div><img src="img/unreal.png" alt=""></div><p>Unreal Engine</p></div></div><div class="panel panel3"><div class="formation"><h1>Formations</h1></div><div class="formations"><div class="timelineformation"><div class="point f1"><div class="p1"></div></div><div class="line f1"><div></div></div><div class="point f2"><div class="p2"></div></div><div class="line f2"><div></div></div><div class="point f3"><div class="p3"></div></div><div class="line f3"><div></div></div></div><div class="formationcontent"><h3 class="f1">Now</h3><p class="f1">Studying at Epitech</p><h3 class="f2">2023</h3><p class="f2">Computer Science<br>Bachelor\'s Degree</p><h3 class="f3">2018</h3><p class="f3">Scientific High<br>School Diploma</p></div></div></div><div class="panel panel4"><div class="experience"><h1>Experiences</h1></div><div class="experiences"><div class="experiencecontent"><h3 class="e1">2022</h3><p class="e1">Luxondes -<br>3D Web App</p><h3 class="e2">2021</h3><p class="e2">La Poste - Postman</p><h3 class="e3">2020</h3><p class="e3">Burger King -<br>Crew Member</p></div><div class="timelineexperience"><div class="point e1"><div class="p4"></div></div><div class="line e1"><div></div></div><div class="point e2"><div class="p5"></div></div><div class="line e2"><div></div></div><div class="point e3"><div class="p6"></div></div><div class="line e3"><div></div></div></div></div></div><div class="panel panel2"><div class="contact"><h1>Contact Me</h1></div><form class="form" action="" method="get"><div><label for="name"></label><input type="text" name="name" id="name" placeholder="Your Name"required /></div><div><label for="email"></label><input type="email" name="email" id="email" placeholder="Your Mail"required /></div><div><label for="message"></label><textarea id="message" name="message" placeholder="Your Message"required></textarea></div><div><input type="submit" value="Text Me !" /></div></form><div class="links"><a href=""><img src="img/linkedin.png" alt=""></a><a href=""><img src="img/github.png" alt=""></a><a href=""><img src="img/twitter.png" alt=""></a></div></div></div>';
        }else if (s==1){
            document.getElementsByTagName("body")[0].innerHTML = '<div class="scroll"><div class="panel panel1"><div class="img"><img src="img/me.png" alt=""></div><div class="name"><h1>GELLES<br>Julien</h1><p>50.6557° N<br>02.8292° E</p></div><div class="title"><h3>WEB DEVELOPPER</h3></div></div><div class="panel panel5"><div class="skill"><h1>My Skills</h1></div><div class="languages"><p>HTML</p><div><img src="img/html.png" alt=""></div><div><img src="img/python.png" alt=""></div><p>PYTHON</p><p>CSS</p><div><img src="img/css.png" alt=""></div><div><img src="img/java.png" alt=""></div><p>JAVA</p><p>JS</p><div><img src="img/js.png" alt=""></div><div><img src="img/spring.png" alt=""></div><p>SPRING</p><p>REACT</p><div><img src="img/react.png" alt=""></div><div><img src="img/c.png" alt=""></div><p>C</p><p>PHP</p><div><img src="img/php.png" alt=""></div><div><img src="img/docker.png" alt=""></div><p>DOCKER<p></div><div class="skills"><p>Blender</p><div><img src="img/blender.png" alt=""></div><div><img src="img/unreal.png" alt=""></div><p>Unreal Engine</p></div></div><div class="panel panel4"><div class="experience"><h1>Experiences</h1></div><div class="experiences"><div class="experiencecontent"><h3 class="e1">2022</h3><p class="e1">Luxondes -<br>3D Web App</p><h3 class="e2">2021</h3><p class="e2">La Poste - Postman</p><h3 class="e3">2020</h3><p class="e3">Burger King -<br>Crew Member</p></div><div class="timelineexperience"><div class="point e1"><div class="p4"></div></div><div class="line e1"><div></div></div><div class="point e2"><div class="p5"></div></div><div class="line e2"><div></div></div><div class="point e3"><div class="p6"></div></div><div class="line e3"><div></div></div></div></div></div></div><div class="scroll inverted"><div class="panel panel6"><div class="projects"><a href="#"><img src="img/projects.png" alt=""></a></div><div class="project"><h1>My Portfolio</h1></div></div><div class="panel panel3"><div class="formation"><h1>Formations</h1></div><div class="formations"><div class="timelineformation"><div class="point f1"><div class="p1"></div></div><div class="line f1"><div></div></div><div class="point f2"><div class="p2"></div></div><div class="line f2"><div></div></div><div class="point f3"><div class="p3"></div></div><div class="line f3"><div></div></div></div><div class="formationcontent"><h3 class="f1">Now</h3><p class="f1">Studying at Epitech</p><h3 class="f2">2023</h3><p class="f2">Computer Science<br>Bachelor\'s Degree</p><h3 class="f3">2018</h3><p class="f3">Scientific High<br>School Diploma</p></div></div></div><div class="panel panel2"><div class="contact"><h1>Contact Me</h1></div><form class="form" action="" method="get"><div><label for="name"> </label><input type="text" name="name" id="name" placeholder="Your Name"required /></div><div><label for="email"> </label><input type="email" name="email" id="email" placeholder="Your Mail"required /></div><div><label for="message"></label><textarea id="message" name="message" placeholder="Your Message"required></textarea></div><div><input type="submit" value="Text Me !" /></div></form><div class="links"><a href=""><img src="img/linkedin.png" alt=""></a><a href=""><img src="img/github.png" alt=""></a><a href=""><img src="img/twitter.png" alt=""></a></div></div></div>';
            let scroll1 = document.getElementsByClassName("scroll")[0];
            let scroll2 = document.getElementsByClassName("scroll")[1];
            scroll1.addEventListener("scroll", (e) => {
                scroll2.scroll({
                    top: scroll1.scrollTop,
                    left: 0
                });
            });
            scroll2.addEventListener("scroll", (e) => {
                scroll1.scroll({
                    top: scroll2.scrollTop,
                    left: 0
                });
            });
        }else{
            document.getElementsByTagName("body")[0].innerHTML = '<div class="scroll"><div class="panel panel1"><div class="img"><img src="img/me.png" alt=""></div><div class="name"><h1>GELLES<br>Julien</h1><p>50.6557° N<br>02.8292° E</p></div><div class="title"><h3>WEB DEVELOPPER</h3></div></div><div class="panel panel3"><div class="formation"><h1>Formations</h1></div><div class="formations"><div class="timelineformation"><div class="point f1"><div class="p1"></div></div><div class="line f1"><div></div></div><div class="point f2"><div class="p2"></div></div><div class="line f2"><div></div></div><div class="point f3"><div class="p3"></div></div><div class="line f3"><div></div></div></div><div class="formationcontent"><h3 class="f1">Now</h3><p class="f1">Studying at Epitech</p><h3 class="f2">2023</h3><p class="f2">Computer Science<br>Bachelor\'s Degree</p><h3 class="f3">2018</h3><p class="f3">Scientific High<br>School Diploma</p></div></div></div></div><div class="scroll inverted"><div class="panel panel5"><div class="skill"><h1>My Skills</h1></div><div class="languages"><p>HTML</p><div><img src="img/html.png" alt=""></div><div><img src="img/css.png" alt=""></div><p>CSS</p><p>JS</p><div><img src="img/js.png" alt=""></div><div><img src="img/java.png" alt=""></div><p>JAVA</p><p>C</p><div><img src="img/c.png" alt=""></div><div><img src="img/python.png" alt=""></div><p>PYTHON</p><p>REACT</p><div><img src="img/react.png" alt=""></div><div><img src="img/spring.png" alt=""></div><p>SPRING</p><p>DOCKER</p><div><img src="img/docker.png" alt=""></div><div><img src="img/php.png" alt=""></div><p>PHP</p></div><div class="skills"><p>Blender</p><div><img src="img/blender.png" alt=""></div><div><img src="img/unreal.png" alt=""></div><p>Unreal Engine</p></div></div><div class="panel panel4"><div class="experience"><h1>Experiences</h1></div><div class="experiences"><div class="experiencecontent"><h3 class="e1">2022</h3><p class="e1">Luxondes -<br>3D Web App</p><h3 class="e2">2021</h3><p class="e2">La Poste - Postman</p><h3 class="e3">2020</h3><p class="e3">Burger King -<br>Crew Member</p></div><div class="timelineexperience"><div class="point e1"><div class="p4"></div></div><div class="line e1"><div></div></div><div class="point e2"><div class="p5"></div></div><div class="line e2"><div></div></div><div class="point e3"><div class="p6"></div></div><div class="line e3"><div></div></div></div></div></div></div><div class="scroll"><div class="panel panel6"><div class="projects"><a href="#"><img src="img/projects.png" alt=""></a></div><div class="project"><h1>My Portfolio</h1></div></div><div class="panel panel2"><div class="contact"><h1>Contact Me</h1></div><form class="form" action="" method="get"><div><label for="name"> </label><input type="text" name="name" id="name" placeholder="Your Name"required /></div><div><label for="email"> </label><input type="email" name="email" id="email" placeholder="Your Mail"required /></div><div><label for="message"></label><textarea id="message" name="message" placeholder="Your Message"required></textarea></div><div><input type="submit" value="Text Me !" /></div></form><div class="links"><a href=""><img src="img/linkedin.png" alt=""></a><a href=""><img src="img/github.png" alt=""></a><a href=""><img src="img/twitter.png" alt=""></a></div></div></div>';
            let scroll1 = document.getElementsByClassName("scroll")[0];
            let scroll2 = document.getElementsByClassName("scroll")[1];
            let scroll3 = document.getElementsByClassName("scroll")[2];
            scroll1.addEventListener("scroll", (e) => {
                scroll2.scroll({
                    top: scroll1.scrollTop,
                    left: 0
                });
                scroll3.scroll({
                    top: scroll1.scrollTop,
                    left: 0
                });
            });
            scroll2.addEventListener("scroll", (e) => {
                scroll1.scroll({
                    top: scroll2.scrollTop,
                    left: 0
                });
                scroll3.scroll({
                    top: scroll2.scrollTop,
                    left: 0
                });
            });
            scroll3.addEventListener("scroll", (e) => {
                scroll1.scroll({
                    top: scroll3.scrollTop,
                    left: 0
                });
                scroll2.scroll({
                    top: scroll3.scrollTop,
                    left: 0
                });
            });
        }
    }
    rehtml(size)
    var f = [
        document.getElementsByClassName("f1"),
        document.getElementsByClassName("f2"),
        document.getElementsByClassName("f3")]

    var e = [
        document.getElementsByClassName("e1"),
        document.getElementsByClassName("e2"),
        document.getElementsByClassName("e3")]

    var p = [
        document.getElementsByClassName("p1")[0],
        document.getElementsByClassName("p2")[0],
        document.getElementsByClassName("p3")[0],
        document.getElementsByClassName("p4")[0],
        document.getElementsByClassName("p5")[0],
        document.getElementsByClassName("p6")[0]]
    
    for(let i=0; i < f.length; i++){
        for(let j=0; j < f[i].length; j++){
            f[i][j].addEventListener("mouseenter", () =>{p[i].style.background = "#E9EAF0"});
            f[i][j].addEventListener("mouseleave", () =>{p[i].style.background = "none"});
        }
    }
    for(let k=0; k < e.length; k++){
        for(let l=0; l < e[k].length; l++){
            e[k][l].addEventListener("mouseenter", () =>{p[k+3].style.background = "#E9EAF0"});
            e[k][l].addEventListener("mouseleave", () =>{p[k+3].style.background = "none"});
        }
    }



};
