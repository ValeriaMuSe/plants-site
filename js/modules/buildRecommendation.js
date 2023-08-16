// import PlantsBuilder from '../plantsBuilder.js';
// import plantsConfig from './config.js';

// function getPlant(place, toxicPlant) {
//   if (!plantsConfig[place]) {
//     return null;
//   }

//   const plantCategory = toxicPlant.toLowerCase() === 'yes' ? 'nonToxic' : 'toxic';
//   const plantArray = plantsConfig[place][plantCategory];
//   const plantType = plantArray ? plantArray[0] : null;
//   const plant = plantType ? { name: plantType.name, image: plantType.image } : null;

//   return plant;
// }

// function buildRecommendation(place, soilType, toxicPlant, water, style, extras) {
//   const plant = getPlant(place, toxicPlant);
  
//   if (!plant) {
//     return null;
//   }

//   const recommendation = new PlantsBuilder()
//     .withPlant(plant)
//     .withImage(plant.image)
//     .withSoilType(soilType)
//     .withCeramicMaterial() 
//     .withWateringMethod(water)
//     .withPotStyle(style)
//     .withExtras(extras);

//     if (water === 'Overwater') {
//       recommendation.withClayMaterial(); 
//     } else if (water === 'Underwater' || water === 'Neither') {
//       recommendation.withCeramicMaterial();
//     }

//   localStorage.setItem('plantRecommendation', JSON.stringify(recommendation));

//   return recommendation;
// }


// export default buildRecommendation;

import PlantsBuilder from '../plantsBuilder.js';
import plantsConfig from './config.js';

function getPlant(place, toxicPlant) {
  if (!plantsConfig[place]) {
    return null;
  }

  const plantCategory = toxicPlant.toLowerCase() === 'yes' ? 'nonToxic' : 'toxic';
  const plantArray = plantsConfig[place][plantCategory];
  const plantType = plantArray ? plantArray[0] : null;
  const plant = plantType ? { name: plantType.name, image: plantType.image } : null;

  return plant;
}

function buildRecommendation(place, soilType, toxicPlant, water, style, extras) {
  const plant = getPlant(place, toxicPlant);
  
  if (!plant) {
    return null;
  }

  const recommendation = new PlantsBuilder()
  .withPlant(plant)
  .withImage(plant.image)
  .withSoilType(soilType)
  .withCeramicMaterial()
  .withWateringMethod(water)
  .withPotStyle(style)
  .withExtras(extras)
  .withExtrasImages(getExtrasImages(extras));

  if (water === 'Overwater') {
    recommendation.withClayMaterial(); 
  } else if (water === 'Underwater' || water === 'Neither') {
    recommendation.withCeramicMaterial();
  }

  localStorage.setItem('plantRecommendation', JSON.stringify(recommendation));

  return recommendation;
}


function getExtrasImages(extras) {
  const extrasImages = [];
  if (extras.includes("Moss pole")) {
    extrasImages.push('./images/moss-pole.png');
  }
  if (extras.includes("Pebbles")) {
    extrasImages.push('./images/pebbles.png');
  }
  if (extras.includes("Smaller plants")) {
    extrasImages.push('./images/mini-plants.png');
  }
  return extrasImages;
}

export default buildRecommendation;
