export const harvestPlants = (plantsArray) => {
    let arrayOfSeedObjects = [];
    for (plant of plantsArray) {

        if (plant.type=="corn") {
            for (let i=0; i<plant.output; i=i+2) {
                arrayOfSeedObjects.push(plant);
            };
        } else {
            for (let i=0; i<plant.output; i++) {
                arrayOfSeedObjects.push(plant);
            };
        };

    };
    return arrayOfSeedObjects;
};