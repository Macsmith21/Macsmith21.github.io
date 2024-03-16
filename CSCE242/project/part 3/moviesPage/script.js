document.addEventListener('DOMContentLoaded', loadMovies);

async function loadMovies() {
    try {
        const moviesResponse = await fetch("./json.json");
        const moviesData = await moviesResponse.json();
        renderMovies(housePlansData);
    } catch (fetchError) {
        console.error('Error fetching house plans:', fetchError);
    }
}

function Movies(movies) {
    const plansContainer = document.getElementById('top5');
    plansContainer.innerHTML = '';
    movies.forEach(movie => {
        const planContainer = document.createElement('section');
        planContainer.className = 'row';

        const planTitle = document.createElement('h2');
        planTitle.textContent = movie.title;
        planContainer.appendChild(planTitle);

        const planMainImage = document.createElement('img');
        planMainImage.src = movie.image;
        planMainImage.alt = plan.name;
        planMainImage.classList.add('main-house-image');
        planContainer.appendChild(planMainImage);

        const planDetails = document.createElement('div');
        planDetails.className = 'details';

        const planSize = document.createElement('p');
        planSize.textContent = `Size: ${plan.size} square feet`;
        planDetails.appendChild(planSize);

        const planBedrooms = document.createElement('p');
        planBedrooms.textContent = `Bedrooms: ${plan.bedrooms}`;
        planDetails.appendChild(planBedrooms);

        const planBathrooms = document.createElement('p');
        planBathrooms.textContent = `Bathrooms: ${plan.bathrooms}`;
        planDetails.appendChild(planBathrooms);

        const planFeaturesList = document.createElement('ul');
        plan.features.forEach(feature => {
            const featureItem = document.createElement('li');
            featureItem.textContent = feature;
            planFeaturesList.appendChild(featureItem);
        });
        planDetails.appendChild(planFeaturesList);

        planContainer.appendChild(planDetails);

        const planFloorPlansSection = document.createElement('div');
        planFloorPlansSection.className = 'floor-plans';

        plan.floor_plans.forEach(floorPlan => {
            const floorPlanContainer = document.createElement('div');
            floorPlanContainer.className = 'floor-plan';

            const floorPlanTitle = document.createElement('h3');
            floorPlanTitle.textContent = floorPlan.name;
            floorPlanContainer.appendChild(floorPlanTitle);

            const floorPlanImage = document.createElement('img');
            floorPlanImage.src = `https://portiaportia.github.io/json/images/house-plans/${floorPlan.image}`;
            floorPlanImage.alt = `${plan.name} - ${floorPlan.name}`;
            floorPlanImage.classList.add('floor-plan-image');
            floorPlanContainer.appendChild(floorPlanImage);

            planFloorPlansSection.appendChild(floorPlanContainer);
        });

        planContainer.appendChild(planFloorPlansSection);
        plansContainer.appendChild(planContainer);
    });
}







const Hamburger = () =>{
    let burg = document.getElementById("main-nav");
    burg.classList.toggle("hide");
}

window.onload = () => {
    document.getElementById("hamburger").onclick = Hamburger;
}
