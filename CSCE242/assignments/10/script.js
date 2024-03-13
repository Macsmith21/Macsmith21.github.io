const Ads = ['enjoy these wonderful pictures','go touch grass!','buy my stuff or else','these are not the droids you are looking for...','buy your onlyscams subscription today!'];
let images =  [
    { src: 'images/mountain-lake.jpg', attribution: 'https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7', credit: 'Image by vecstock on Freepik' },
    { src: 'images/golden.jpg', attribution: 'https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4', credit: 'Image by wirestock on Freepik' },
    { src: 'images/garden.jpg', attribution: 'https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4', credit: 'Image by wirestock on Freepik' },
    { src: 'images/small-house.jpg', attribution: 'https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4', credit: 'Image by wirestock on Freepik' },
    { src: 'images/snow.jpg', attribution: 'https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4', credit: 'Image by wirestock on Freepik' }
]
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
window.onload = images.forEach(makeImg =>{

    let img = document.createElement("img")
    let desc = document.createElement("div")
    let attr = document.createElement("a")
    img.src = makeImg.src;
    attr.href = makeImg.attribution;
    attr.innerHTML = makeImg.credit;

    imgSect.appendChild(img)
    imgSect.appendChild(desc)
    desc.appendChild(attr)
})
