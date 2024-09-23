import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

export const plantSeeds = (plantingPlan) => {
    for (const innerArray of plantingPlan) {
        for (const plant of innerArray) {
            if (plant === "Asparagus"){
                let asparagusSeed = createAsparagus();
                addPlant(asparagusSeed)

            }
            else if (plant === "Corn"){
                let cornSeed = createCorn();
                addPlant(cornSeed)

            }
            else if (plant === "Potato"){
                let potatoSeed = createPotato();
                addPlant(potatoSeed)

            }
            else if (plant === "Soybean"){
                let soybeanSeed = createSoybean();
                addPlant(soybeanSeed)

            }
            else if (plant === "Sunflower"){
                let sunflowerSeed = createSunflower();
                addPlant(sunflowerSeed)

            }
            else if (plant === "Wheat"){
                let wheatSeed = createWheat();
                addPlant(wheatSeed)

            }
            
        }
        
    }
};