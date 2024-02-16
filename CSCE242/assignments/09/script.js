
const workDiv = document.getElementById("work")
const yogaDiv = document.getElementById("yoga")
const Ball = document.getElementById("ball")
const Hamburger = () =>{
    let burg = document.getElementById("main-nav");
    burg.classList.toggle("hide");
    if(burg.classList.contains("hide") == false)
    {
        document.getElementById("dropdown").innerHTML = "&#9650;"
    }
    else{
        document.getElementById("dropdown").innerHTML = "&#9660;"

    }
}
let pos = 0;
let bouncing = false;
let bouncedown = true

window.onload=()=>
{
    const bouncer = (e) =>
    {
        e.preventDefault();
        bouncing = !bouncing
        console.log("clicked")
        console.log(bouncing)
        root = document.querySelector(":root");
        if(bouncing){
            document.getElementById("ballBtn").innerHTML = "Stop"
                
                    bounceball = setInterval(()=>
                    {
                        if(bouncedown==true && pos < 500 && bouncing==true){
                            root.style.setProperty("--ball-top",pos +"px"); pos++;console.log(pos);
                        } 
                           if(pos == 500){
                            console.log(bouncedown)
                            bouncedown = false;
                        }
                        if(bouncedown==false && pos > 0 && bouncing==true){
                                root.style.setProperty("--ball-top",pos +"px"); pos--;console.log(pos);
                            }
                        if(pos == 0){
                            bouncedown = true;
                        }
            
                
                     },1)
                bounceball;
            }
        else{
            document.getElementById("ballBtn").innerHTML = "Start"
            clearInterval(bounceball);
        }

     }

    const divswitch1 = (e) =>
    {
        e.preventDefault();
        if(workDiv.classList.contains("hide") == true)
        {
            workDiv.classList.remove("hide");
            yogaDiv.classList.add("hide");
        }
        else;

    }
    function divswitch2(e) 
    {
        e.preventDefault();
        if (yogaDiv.classList.contains("hide") == true) {
            workDiv.classList.add("hide");
            yogaDiv.classList.remove("hide");
        }
        else;

    }

    document.getElementById("E1").onclick = divswitch1
    document.getElementById("E2").onclick = divswitch2
    document.getElementById("dropdown").onclick = Hamburger;
    document.getElementById("ballBtn").onclick = bouncer;
};