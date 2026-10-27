document.addEventListener('DOMContentLoaded', loadHousePlans);

async function loadHousePlans() {
    try {
        const housePlansResponse = await fetch('https://portiaportia.github.io/json/house-plans.json');
        const housePlansData = await housePlansResponse.json();
        renderHousePlans(housePlansData);
    } catch (fetchError) {
        console.error('Error fetching house plans:', fetchError);
    }
}

function renderHousePlans(housePlans) {
    const plansContainer = document.getElementById('container');
    plansContainer.innerHTML = '';
    housePlans.forEach(plan => {
        const planContainer = document.createElement('div');
        planContainer.className = 'house';

        const planTitle = document.createElement('h2');
        planTitle.textContent = plan.name;
        planContainer.appendChild(planTitle);

        const planMainImage = document.createElement('img');
        planMainImage.src = `https://portiaportia.github.io/json/images/house-plans/${plan.main_image}`;
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
