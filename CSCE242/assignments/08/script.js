const CommandLine = document.getElementById("comline")
const yogaSlide = document.getElementById("slider")
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
    const imgSwitch = () =>
    {
        
            if (CommandLine.value.toLowerCase().trim().charAt(CommandLine.value.length-1) == "b")
            {
                document.getElementById("guy").src="images/read.jpg";
            }
            else if (CommandLine.value.toLowerCase().trim().charAt(CommandLine.value.length-1) == "c")
            {
                document.getElementById("guy").src="images/clown.jpg";
            }
            else if (CommandLine.value.toLowerCase().trim().charAt(CommandLine.value.length-1) == "p")
            {
                document.getElementById("guy").src="images/birthday.jpg";
            }
            else if (CommandLine.value.toLowerCase().trim().charAt(CommandLine.value.length-1) == "r")
            {
                document.getElementById("guy").src="images/rain.jpg";
            }
            else if (CommandLine.value.toLowerCase().trim().charAt(CommandLine.value.length-1) == "s")
            {
                document.getElementById("guy").src="images/shovel.jpg";
            }
            else if (CommandLine.value.toLowerCase().trim().charAt(CommandLine.value.length-1) == "w")
            {
                document.getElementById("guy").src="images/work.jpg";
            }
    }
    const sliderSwitch =() => 
    {
            let image = document.getElementById("guyYoga")
            if (yogaSlide.value == "1")
            {
                image.src = "images/yoga1.jpg";
            }
            if (yogaSlide.value == "2")
            {
                image.src = "images/yoga2.jpg";
            }
            if (yogaSlide.value == "3")
            {
                image.src = "images/yoga3.jpg";
            }
            if (yogaSlide.value == "4")
            {
                image.src = "images/yoga4.jpg";
            }
            if (yogaSlide.value == "5")
            {
                image.src = "images/yoga5.jpg";
            }
            if (yogaSlide.value == "6")
            {
                image.src = "images/yoga6.jpg";
            }
            if (yogaSlide.value == "7")
            {
                image.src = "images/yoga7.jpg";
            }
            if (yogaSlide.value == "8")
            {
                image.src = "images/yoga8.jpg";
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

    yogaSlide.oninput = sliderSwitch
    CommandLine.onkeyup = imgSwitch
    document.getElementById("E1").onclick = divswitch1
    document.getElementById("E2").onclick = divswitch2
    document.getElementById("dropdown").onclick = Hamburger;
};