

window.onload = () => 
{
    let Switch= document.getElementById("imgSwitch");
    let slider= document.getElementById("Slider");
    let image = document.getElementById("RotatingImg");
    let starCol = document.getElementById("Star-Col");
    

    const Switcher =() =>{
     Switch.src = "https://place-hold.it/200x200/blue/red"
    }

    const Rotator=()=>
   {
        image.style.transform = "rotate(" + slider.value + "deg)";
   }
   const AddStar = () => {
     Star = document.createElement("section");
     starCol.append(Star);
     Star.classList.add("star");
     Star.innerHTML = "&star;";
     



   }
   slider.oninput=Rotator;
   Switch.onclick = Switcher;
   starCol.onclick = AddStar;

}
