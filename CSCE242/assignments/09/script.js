
const workDiv = document.getElementById("work")
const yogaDiv = document.getElementById("yoga")

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

    yogaSlide.oninput = sliderSwitch
    CommandLine.onkeyup = imgSwitch
    document.getElementById("E1").onclick = divswitch1;
    document.getElementById("E2").onclick = divswitch2;
    document.getElementById("dropdown").onclick = Hamburger;
};