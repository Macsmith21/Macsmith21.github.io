const Ads = ['enjoy these wonderful pictures','go touch grass!','buy my stuff or else','these are not the droids you are looking for...','buy your onlyscams subscription today!'];
let images = [['garden.jpg', ''],['single-tree.jpg', ''],['mountain-lake.jpg', ''],['small-house.jpg', ''],['snow.jpg', '']];
const ADP = document.getElementById('advertisement');
let imgSect = document.getElementById("image-sect");
let currAd = 0;

//ad changer//
setInterval(()=>{
    if(currAd >= Ads.length){
        currAd = 0
        }
    ADP.innerHTML = Ads[currAd]
    currAd++
}
,3000);



//image display//

