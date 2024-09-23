import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { usePlant } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./Catalog.js";

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);

const thePlantList = usePlant();
const thePlantArray = harvestPlants(thePlantList);

Catalog(thePlantArray);
