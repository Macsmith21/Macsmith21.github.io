class bear {
    constructor(name, region, size, lifespan, sciname, diet, color, image) {

      this.name = name;
      this.region=region;
      this.size=size;
      this.lifespan=lifespan;
      this.sciname=sciname;
      this.diet=diet;
      this.color=color;
      this.image=image;
    }
}
const bearlist=[
    new bear('American Black Bear','North America','small','21-39','Ursus Americanus', 'Berries, fish, insects', 'Black','images/blackbear.jpg'),
    new bear('Brown Bear','North America, Eurasia','Large','20-30','Ursus Arctos','Berries, Fish, Small Mammals','Brown','images/brownbear.jpg'),
    new bear('Polar Bear','Arctic','Large','20-30','Ursus Maritimus','Seal, Walrus, Narwhal','White','images/polarbear.jpg'),
    new bear('Panda','China','Small','15-20','Ailuropoda Melanoleuca','Bamboo, Flora, Fish, Birds','Multi-Colored','images/panda.jpg'),
    new bear('Sloth Bear','India, Sri Lanka','Medium', '20-40','Melursus Ursinus','termites, ants, mango, sugarcane','Black','images/slothbear.jpg')
]

// Function to create bear sections and attach event listeners for opening the modal
function displayBears() {
  const flexContainer = document.querySelector('.flexcontainer');
  flexContainer.innerHTML = ''; // Clear existing content

  bearlist.forEach(bear => {
      const bearSection = document.createElement('section');
      bearSection.classList.add('subsect');

      const title = document.createElement('h3');
      title.innerText = bear.name;
      bearSection.appendChild(title);

      const image = document.createElement('img');
      image.src = bear.image;
      bearSection.appendChild(image);

      bearSection.addEventListener('click', () => {
          openModal(bear);
      });

      flexContainer.appendChild(bearSection);
  });
}

// Function to populate and open the modal with bear details
function openModal(bear) {
  const modal = document.getElementById('BearModal');
  const bearDetails = document.getElementById('bearDetails');

  bearDetails.innerHTML = `<h2>${bear.name}</h2>
                           <p><strong>Region:</strong> ${bear.region}</p>
                           <p><strong>Size:</strong> ${bear.size}</p>
                           <p><strong>Lifespan:</strong> ${bear.lifespan}</p>
                           <p><strong>Scientific Name:</strong> ${bear.scientificName}</p>
                           <p><strong>Diet:</strong> ${bear.diet}</p>
                           <p><strong>Color:</strong> ${bear.color}</p>
                           <img src="${bear.image}" alt="${bear.name}" style="width:200px;">`;

  modal.style.display = "block";

  const closeModal = document.querySelector('.close');
  closeModal.addEventListener('click', () => {
      modal.style.display = "none";
  });
}

// Add window load event listener to display bears
window.addEventListener('load', displayBears);
