
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



window.onload=()=>
{
    const bouncer = (e) =>{
        e.preventDefault();
        bounceball = setInterval(()=>{Ball.style.top=+5+"px"},1000)
        bounceball;
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