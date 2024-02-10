const CommandLine = document.getElementById("comline")
window.onload=()=>{
    const imgSwitch = () =>{
       
        if (CommandLine.value.toLowerCase().trim() == "b")
        {
            document.getElementById("guy").src="images/read.jpg"
     }
    CommandLine.onkeyup = imgSwitch
    }
};