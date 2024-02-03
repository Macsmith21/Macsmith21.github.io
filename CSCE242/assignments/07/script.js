

window.onload = () => 
{
    let slider= document.getElementById("Slider");
    let image = document.getElementById("RotatingImg");

    const Rotator=()=>
   {
        image.style.transform = "rotate(" + slider.value + "deg)";
   }
   slider.oninput=Rotator;

}
