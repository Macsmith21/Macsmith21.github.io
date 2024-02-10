const CommandLine = document.getElementById("comline")
const yogaSlide = document.getElementById("slider")
const workDiv = document.getElementById("work")


window.onload=()=>{

    const imgSwitch = () =>
    {
       
        if (CommandLine.value.toLowerCase().trim().charAt(CommandLine.value.length-1) == "b")
        {
            document.getElementById("guy").src="images/read.jpg"
        }
        else if (CommandLine.value.toLowerCase().trim().charAt(CommandLine.value.length-1) == "c")
        {
            document.getElementById("guy").src="images/clown.jpg"
        }
        else if (CommandLine.value.toLowerCase().trim().charAt(CommandLine.value.length-1) == "p")
        {
            document.getElementById("guy").src="images/birthday.jpg"
        }
        else if (CommandLine.value.toLowerCase().trim().charAt(CommandLine.value.length-1) == "r")
        {
            document.getElementById("guy").src="images/rain.jpg"
        }
        else if (CommandLine.value.toLowerCase().trim().charAt(CommandLine.value.length-1) == "s")
        {
            document.getElementById("guy").src="images/shovel.jpg"
        }
        else if (CommandLine.value.toLowerCase().trim().charAt(CommandLine.value.length-1) == "w")
        {
            document.getElementById("guy").src="images/work.jpg"
        }
    }
    const sliderSwitch =() => 
    {
        let image = document.getElementById("guyYoga")
        if (yogaSlide.value == "1")
        {
            image.src = "images/yoga1.jpg"
        }
        if (yogaSlide.value == "2")
        {
            image.src = "images/yoga2.jpg"
        }
        if (yogaSlide.value == "3")
        {
            image.src = "images/yoga3.jpg"
        }
        if (yogaSlide.value == "4")
        {
            image.src = "images/yoga4.jpg"
        }
        if (yogaSlide.value == "5")
        {
            image.src = "images/yoga5.jpg"
        }
        if (yogaSlide.value == "6")
        {
            image.src = "images/yoga6.jpg"
        }
        if (yogaSlide.value == "7")
        {
            image.src = "images/yoga7.jpg"
        }
        if (yogaSlide.value == "8")
        {
            image.src = "images/yoga8.jpg"
        }

    }
    yogaSlide.oninput = sliderSwitch
    CommandLine.onkeyup = imgSwitch
};