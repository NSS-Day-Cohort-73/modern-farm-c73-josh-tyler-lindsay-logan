export const harvestPlants = (plantsArray) => {
    let arrayOfSeedObjects = [];
    for (const plant of plantsArray) {

        if (plant.type=="Corn") {
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